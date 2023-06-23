import { MongoClient } from "mongodb";
import "dotenv/config"

const connection = MongoClient(process.env.MONGO_URI)
await connection.connect()

