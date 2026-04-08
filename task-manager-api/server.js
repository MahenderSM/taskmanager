const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Import routes (we'll create these)
const userRoutes = require('../task-manager-api/src/routes/userRoutes');
const taskRoutes = require('../task-manager-api/src/routes/taskRoutes');

// Create express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
// app.use('/api/users', userRoutes);
// app.use('/api/tasks', taskRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Task Manager API is running!' });
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected Successfully'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API URL: http://localhost:${PORT}`);
});

// demo