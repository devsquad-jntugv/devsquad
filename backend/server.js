const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./dbconfig');
const routes = require('./routes');

dotenv.config();

const app = express();
app.use(cors({
    origin: ['https://yuktadevsquad.jntugvcev.in','https://yuktadevsquad.vercel.app','http://localhost:3000'],
    methods: ["GET", "POST"]
}));
app.use(express.json());

// Connect to the database
connectDB();

// Use routes
app.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
