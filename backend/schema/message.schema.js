import Joi from 'joi'

export const messageSchema = {
  message: Joi.string().trim().required().min(1).max(500).messages({
    'string.empty': 'Message is required',
    'string.min': 'Message must be atleast 1 character',
    'string.max': 'Message must not be more than 500 characters',
  }),
}
