import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose'

const connectToMongoDB = async () => {
  let dbUri 

  if (process.env.NODE_ENV === 'production') {
    dbUri = process.env.MONGO_PROD_URI
  } else {
    dbUri = process.env.MONGO_LOCAL_URI
  }

  try {
    await mongoose.connect(dbUri)

  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

export default connectToMongoDB
