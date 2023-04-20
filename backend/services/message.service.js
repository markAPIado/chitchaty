import MessageModel from "../models/message.model.js";

export const createMessage = (message) => MessageModel.create({ message });