import express from 'express'
import {
  createMessageHandler,
  sendMessageHandler,
} from '../controllers/message.controller.js'
import { validateInput } from '../middlewares/input-validation.js'
import { messageSchema } from '../schema/message.schema.js'

const messageRouter = express.Router()

messageRouter.post(
  '/',
  validateInput(messageSchema),
  createMessageHandler,
  sendMessageHandler
)

export { messageRouter }
