import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { socket_functions } from './socket_handler.js';

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(process.env.URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(io) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db = client.db('ProjectInfo');
    socket_functions(io, db);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
}
//run().catch(console.dir);

export const DB_connect = (io) => {
    run(io).catch(console.dir);
}
