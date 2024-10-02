import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://yuktadevsquad:Devsquad%4024@devsquad-cluster.zkc1h.mongodb.net/?retryWrites=true&w=majority"
let client;

export default async function handler(req, res) {
    if (!client) {
        client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
    }

    const database = client.db('eventsdb'); // Replace with your database name
    const collection = database.collection('events'); // Replace with your collection name

    const data = await collection.find({}).toArray(); // Query your collection
    res.status(200).json(data); // Send the response
}
