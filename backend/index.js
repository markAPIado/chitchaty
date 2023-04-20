import * as dotenv from 'dotenv'
dotenv.config()
import app from './server.js'

const port = process.env.PORT || 5090

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
