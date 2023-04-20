import * as dotenv from 'dotenv'
dotenv.config()
import app from './server.js'
import connectToMongoDB from './utils/connect-mongodb.utils.js'

connectToMongoDB()

const port = process.env.PORT || 5090

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
