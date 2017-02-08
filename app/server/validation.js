import isEmpty from 'lodash.isempty'

const unique = (model, values, field) => {
  return model.where({ [field]: values[field] }).fetchAll().then(records => {
    if (records.some(r => r.id !== values.id)) {
      return 'Dups!'
    }
  })
}

export function validator(model, validations) {
  const values = model.toJSON()
  const errors = {}

  const applyError = (f, message) => {
    errors[f] = (errors[f] || []).concat(message)
  }

  const validateField = rule => f =>
    rule(model, values, f).then(message => {
      if (message) {
        applyError(f, message)
      }
    })

  const rules = fields => ({
    unique: () => {
      return Promise.all(fields.map(validateField(unique)))
    }
  })

  const v = {
    validate: (...fields) => rules(fields),
    resolve: (...validations) => Promise.all(validations)
  }

  return validations(v).then(() => errors)
}

export class ValidationException {
  constructor(errors) {
    this.errors = errors
  }
}

export function validateThis(bookshelf, params) {
  const bookshelfModel = bookshelf.Model
  bookshelf.Model = bookshelf.Model.extend({
    constructor: function () {
      bookshelfModel.apply(this, arguments)

      if (this.validate) {
        this.on('saving', model => {
          return validator(model, this.validate).then(errors => {
            if (!isEmpty(errors)) {
              throw errors
            }
          })
        })
      }
    }
  })
}
