const User = require('../Models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a user
const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = new User({ name, email });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Signup 
const signUp = async (req, res) => {
    try {    
        const { name, email, password } = req.body;
        console.log(name, email, password)

        // Check if user already exists
        const existingUser = await User.findOne({email:email});
        console.log(existingUser)
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        console.log(1234)
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Create a new user
        const newUser = { name, email, password: hashedPassword };
        User.create(newUser);
        
        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ error: error.message });
    }
};

// Login endpoint
const login = async(req, res) => {
    try {
        const { email, password } = req.body;

        // Check if email and password are provided
        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required.' });
        }

        // Find user by email
        const user = await User.findOne({ email });
        
        // Check if user exists and password matches
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Optional: Generate a JWT token (recommended for authentication)
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '30d' });

        console.log('Token', token, '\n')
    

        // Send success response with user info and token
        res.json({
            message: 'Login successful!',
            token, token, // Include token in response
            user: { id: user._id, email: user.email, name:user.name } // Optionally include user info
        });

    } catch (error) {
        console.error('Login error:', error); // Log error for debugging
        res.status(500).json({ error: 'Internal server error' }); // General error message for clients
    }
};

const getUserByToken = async (req, res) => {
    try {
        const jwtToken = req.header("Authorization");
        if (!jwtToken) {
            return res.status(401).json({
                data: "Authorization token missing",
                status: "error"
            });
        }

        const token = jwtToken.replace("Bearer ", "").trim();
        console.log(token);

        // Verify the token
        let userDecoded;
        try {
            userDecoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            console.log(err);
            return res.status(401).json({
                data: "Token expired or invalid",
                status: "error"
            });
        }

        console.log("Decoded user:", userDecoded);
        const user = await User.findById(userDecoded.id);
        if (!user) {
            return res.status(404).json({
                data: "User not found",
                status: "error"
            });
        }

        // Send success response with user info and token
        res.json({
            message: 'User retrieved successfully!',
            user,
            token: token
        });

    } catch (error) {
        console.error('Error retrieving user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


module.exports = {
    createUser,
    getAllUsers,
    login,
    signUp,
    getUserByToken
};
