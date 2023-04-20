import * as dotenv from 'dotenv'
dotenv.config()
import { Configuration, OpenAIApi } from 'openai'

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

export const sendMessage = (message) => {
  return openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'user',
        content: message,
      },
    ],
  })
}
