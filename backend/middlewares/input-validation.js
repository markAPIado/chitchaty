import Joi from 'joi'

export const validateInput =
  (input, schema, abortEarly) => (req, res, next) => {
    const object = Joi.object(schema)
    const options = { abortEarly }
    const { error } = object.validate(req.body, options)
    if (!error) return next()

    const errors = {}

    error.details.forEach((item) => {
      errors.type = 'input'
      errors.path = item.path[0]
      errors.message = item.message
    })

    res.status(400).json({ error: errors })
  }
