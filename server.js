const express = require('express');
const connectDB = require('./src/connection/db');
const authRoutes = require('./src/routes/auth');
const passwordResetRoutes = require('./src/routes/reset-password');
const cors = require('cors');
const session = require('express-session');
require('dotenv').config();

// Initialize the app
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(express.json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Routes
app.use('/auth', authRoutes);
app.use('/password', passwordResetRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
