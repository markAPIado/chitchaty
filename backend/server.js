import path from 'path'
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { notFound } from './middlewares/not-found.middleware.js'
import { errorHandler } from './middlewares/error-handler.middleware.js'
import { messageRouter } from './routes/message.routes.js'
import connectToMongoDB from './utils/connect-mongodb.utils.js'

const __dirname = path.resolve()

const app = express()
connectToMongoDB()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, '/frontend')))

if (app.get('env') !== 'production') {
  app.use(morgan('dev'))
  console.log('Morgan enabled...')
}

app.use('/api/messages', messageRouter)

app.get('*', (req, res) => {
  return res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
})

app.use(notFound)
app.use(errorHandler)

export default app
