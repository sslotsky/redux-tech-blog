import isEmpty from 'lodash.isempty'
import { unique } from './rules'

export function validator(model, validations) {
  const values = model.toJSON()
  const errors = {}

  const applyError = (f, message) => {
    errors[f] = (errors[f] || []).concat(message)
  }

  const validateField = rule => f =>
    rule(f, values, model).then(message => {
      if (message) {
        applyError(f, message)
      }
    })

  const rules = fields => ({
    unique: (message) => {
      return Promise.all(fields.map(validateField(unique(message))))
    },
    satisfies: (...rules) => {
      return Promise.all(rules.reduce((all, rule) =>
        all.concat(fields.map(validateField(unique))),
        []
      ))
    }
  })

  const v = {
    fact: (...fields) => rules(fields),
    factCheck: (...validations) => Promise.all(validations)
  }

  return validations(v).then(() => errors)
}

export class ValidationException {
  constructor(errors) {
    this.errors = errors
  }
}

export function factCheck(bookshelf, params) {
  const bookshelfModel = bookshelf.Model
  bookshelf.Model = bookshelf.Model.extend({
    constructor: function () {
      bookshelfModel.apply(this, arguments)

      if (this.validate) {
        this.on('saving', model =>
          validator(model, this.validate).then(errors => {
            if (!isEmpty(errors)) {
              throw new ValidationException(errors)
            }
          })
        )
      }
    }
  })
}
