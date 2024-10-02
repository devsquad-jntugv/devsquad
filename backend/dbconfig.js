// app.js
const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; // Replace with your connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Connected to MongoDB");
        // Perform operations here
    } catch (error) {
        console.error("Connection failed", error);
    } finally {
        await client.close();
    }
}

connectToDatabase();