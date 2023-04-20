import express from 'express'
import { createMessageHandler, sendMessageHandler } from '../controllers/message.controller.js';

const messageRouter = express.Router();

messageRouter.post('/', createMessageHandler, sendMessageHandler)

export { messageRouter };

