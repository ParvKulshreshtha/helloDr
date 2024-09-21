const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./Routes/userRoutes');
const AppointmentRoutes = require('./Routes/AppointmentRoutes');

dotenv.config(); // Load environment variables from .env file



const app = express();
const PORT = process.env.PORT || 5000;

// cors
app.use(cors())
// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 20000,  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Use user routes
app.use('/users', userRoutes);
app.use('/appointment', AppointmentRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
