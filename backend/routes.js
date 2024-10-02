const express = require('express');
const Event = require('./models/Event');

const router = express.Router();

// Helper function for sending responses
const sendResponse = (res, status, message, data = null) => {
    res.status(status).json({ message, data });
};

router.get('/', async (req, res) => {
    try {
        const message = "Yuktadevsquad -- API is working ...";
        sendResponse(res, 200, message);
    } catch (error) {
        console.error('Error fetching data:', error);
        sendResponse(res, 500, 'Server error');
    }
});

// POST request to add a new event
router.post('/api/events', async (req, res) => {
    const { clubName, eventName, participants, conductDate, endDate } = req.body;

    if (!clubName || !eventName || !participants || !conductDate || !endDate) {
        return sendResponse(res, 400, 'All fields are required');
    }

    try {
        const newEvent = new Event({ clubName, eventName, participants, conductDate, endDate });
        await newEvent.save();
        sendResponse(res, 201, 'Event added successfully', newEvent);
    } catch (error) {
        console.error('Error adding event:', error);
        sendResponse(res, 500, 'Failed to add event');
    }
});

// GET request to fetch all events
router.get('/api/events', async (req, res) => {
    try {
        const events = await Event.find();
        sendResponse(res, 200, 'Events fetched successfully', events);
    } catch (error) {
        console.error('Error fetching events:', error);
        sendResponse(res, 500, 'Failed to fetch events');
    }
});

// PUT request to update an event by ID
router.put('/api/events/:id', async (req, res) => {
    const { clubName, eventName, participants, conductDate, endDate } = req.body;

    if (!clubName || !eventName || !participants || !conductDate || !endDate) {
        return sendResponse(res, 400, 'All fields are required');
    }

    try {
        const eventId = req.params.id;
        const updatedEvent = await Event.findByIdAndUpdate(eventId, 
            { clubName, eventName, participants, conductDate, endDate }, 
            { new: true }
        );

        if (!updatedEvent) {
            return sendResponse(res, 404, 'Event not found');
        }

        sendResponse(res, 200, 'Event updated successfully', updatedEvent);
    } catch (error) {
        console.error('Error updating event:', error);
        sendResponse(res, 500, 'Error updating event');
    }
});

// DELETE request to remove an event by ID
router.delete('/api/events/:id', async (req, res) => {
    try {
        const eventId = req.params.id;
        const deletedEvent = await Event.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            return sendResponse(res, 404, 'Event not found');
        }

        sendResponse(res, 204, 'Event deleted successfully');
    } catch (error) {
        console.error('Error deleting event:', error);
        sendResponse(res, 500, 'Failed to delete event');
    }
});

module.exports = router;
