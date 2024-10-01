const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./Routes/userRoutes');
const AppointmentRoutes = require('./Routes/AppointmentRoutes');

dotenv.config(); // Load environment variables from .env file



const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
app.use(cors({
    origin:"https://hello-dr-app.vercel.app",
    methods:["POST", "GET"],
    credentials:true
}));

// Middleware to parse JSON requests
app.use(express.json());

// Middleware to add CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://hello-dr-app.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverSelectionTimeoutMS: 20000,  })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Handle preflight requests
app.options('*', cors({
    origin: "https://hello-dr-app.vercel.app",
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
    credentials: true
}));

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
