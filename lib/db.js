import { MongoClient } from 'mongodb'

function connectToDatabase() {
  return MongoClient.connect(process.env.MONGO_URL)
}