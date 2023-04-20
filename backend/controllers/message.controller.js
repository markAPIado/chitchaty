import { createMessage } from '../services/message.service.js'
import { sendMessage } from '../services/openai.service.js'

export const createMessageHandler = async (req, res, next) => {
  try {
    const { message } = req.body

    await createMessage(message)

    next()
  } catch (error) {
    res.status(400)
    error.type = 'db-validation'
    next(error)
  }
}

export const sendMessageHandler = async (req, res, next) => {
  try {
    const { message } = req.body
    const aiResponse = await sendMessage(message)
    res.json({ data: aiResponse.data.choices[0].message.content })
  } catch (error) {
    let status

    if (error?.response?.status) {
      status = error.response.status
    }
    
    res.status(status)
    error.type = 'openai'
    next(error)
  }
}
