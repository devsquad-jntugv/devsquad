const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors({
    origin:['https://yuktadevsquad.vercel.app','http://localhost:3000'],
    methods:['POST',"GET","DELETE","PUT"],
    credentials:true
}))
app.options('*', cors());  // Handle preflight requests
app.use(express.json());

// Mongoose schema for Event
const EventSchema = new mongoose.Schema({
    clubName: { type: String, required: true },   // Changed from 'subclub' to 'clubName'
    eventName: { type: String, required: true },  // Event name
    participants: { type: Number, required: true },
    conductDate: { type: Date, required: true },
    endDate: { type: Date, required: true },      // Event end date
});

// Mongoose model for Event
const Event = mongoose.model('Event', EventSchema);
app.get('/', async (req, res) => {
    try {
        // You can include any logic here, like fetching data from MongoDB if needed.
        const message = "Yuktadevsquad --  api ensures working ..."; // Simple response message
        res.status(200).json({ message });   // Send a JSON response
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ message: 'Server error' }); // Send an error response
    }
});

// POST request to add a new event
app.post('/api/events', async (req, res) => {
    //console.log('Request Body:', req.body);
    const { clubName, eventName, participants, conductDate, endDate } = req.body;

    // Validate required fields
    if (!clubName || !eventName || !participants || !conductDate || !endDate) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        // Create a new event with the correct field names
        const newEvent = new Event({ clubName, eventName, participants, conductDate, endDate });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        //console.error('Error adding event:', error);
        res.status(500).json({ message: 'Failed to add event' });
    }
});

// GET request to fetch all events
app.get('/api/events', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
       // console.error('Error fetching events:', error);
        res.status(500).json({ message: 'Failed to fetch events' });
    }
});

// PUT request to update an event by ID
app.put('/api/events/:id', async (req, res) => {
    const { clubName, eventName, participants, conductDate, endDate } = req.body;

    // Validate required fields
    if (!clubName || !eventName || !participants || !conductDate || !endDate) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const eventId = req.params.id;

        // Update the event using the correct fields
        const updatedEvent = await Event.findByIdAndUpdate(eventId, 
            { clubName, eventName, participants, conductDate, endDate }, 
            { new: true }
        );

        // Check if the event exists
        if (!updatedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json(updatedEvent);
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'Error updating event' });
    }
});

// DELETE request to remove an event by ID
app.delete('/api/events/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const deletedEvent = await Event.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(204).end();
    } catch (error) {
        //console.error('Error deleting event:', error);
        res.status(500).json({ message: 'Failed to delete event' });
    }
});

// MongoDB connection and server startup
const PORT = 5000;
const MONGODB_URI = "mongodb+srv://yuktadevsquad:Devsquad%4024@devsquad-cluster.zkc1h.mongodb.net/eventsdb?retryWrites=true&w=majority"

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => {
    console.error('Database connection error:', err);
});
