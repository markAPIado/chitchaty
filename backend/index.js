import * as dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import app from './server.js'
import connectToMongoDB from './utils/connect-mongodb.utils.js'

connectToMongoDB()

// const corsOptions = {
//   origin: 'https://chitchaty.herokuapp.com/',
// }
// app.use(cors(corsOptions))

const port = process.env.PORT || 5090

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
