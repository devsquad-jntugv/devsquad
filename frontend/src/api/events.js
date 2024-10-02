import { connectToDatabase } from '../lib/mongodb';

export default async function handler(req, res) {
    const { method } = req;

    // Connect to the database
    const { db } = await connectToDatabase();

    if (method === 'GET') {
        try {
            const events = await db.collection('events').find({}).toArray();
            res.status(200).json(events);
        } catch (error) {
            res.status(500).json({ message: 'Failed to fetch events' });
        }
    } else if (method === 'POST') {
        const { clubName, eventName, participants, conductDate, endDate } = req.body;
        if (!clubName || !eventName || !participants || !conductDate || !endDate) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        try {
            const newEvent = { clubName, eventName, participants, conductDate, endDate };
            await db.collection('events').insertOne(newEvent);
            res.status(201).json(newEvent);
        } catch (error) {
            res.status(500).json({ message: 'Failed to add event' });
        }
    }
}
