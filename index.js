const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8000;

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
    return client;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function run() {
  try {
    const client = await connectToMongoDB();
    const db = client.db('vayora');

    const result = await db.collection('users').find().toArray();

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}

run();

app.get('/', (req, res) => {
  res.send('Server running successfully');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});