import { createMessage } from "../services/message.service.js";
import { sendMessage } from "../services/openai.service.js";

export const createMessageHandler = async (req, res, next) => {
  try {
    const { message } = req.body;

    await createMessage(message);

    next();
  } catch (error) {
    next(error);
  }
}

export const sendMessageHandler = async (req, res, next) => {
  try {
    const { message } = req.body;
    const aiResponse = await sendMessage(message)
    res.json({ data: aiResponse.data.choices[0].message.content });
  } catch (error) {
    next(error)
  }
}