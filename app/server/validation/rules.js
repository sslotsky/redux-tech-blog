export const unique = (message = 'duplicate') => (field, values, model) => {
  return model.where({ [field]: values[field] }).fetchAll().then(records => {
    if (records.some(r => r.id !== values.id)) {
      return message
    }
  })
}

export const required = (message = 'required') => (field, values) => {
  if (values[field]) {
    return Promise.resolve()
  }

  return Promise.resolve(message)
}
