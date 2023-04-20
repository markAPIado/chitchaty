import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 500,
  }
}, {
  timestamps: true,
})

const MessageModel = mongoose.model("Message", messageSchema);

export default MessageModel;