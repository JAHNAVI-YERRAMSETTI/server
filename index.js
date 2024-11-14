// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/studentRoutes');
const facultyRoutes = require('./routes/FacultyRoutes'); // Import faculty routes
const uploadRoutes = require('./routes/uploadRoutes'); // Import upload routes

const app = express();

<<<<<<< HEAD
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
=======
app.use(cors(
  origin: '*' 
));
app.use(express.json());

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
>>>>>>> 4c324d02745826c1db25c8a6d6fd152e65ce1a26

// Use routes for API
app.use('/api', studentRoutes);
app.use('/api', facultyRoutes); // Add faculty routes
app.use('/api', uploadRoutes); // Add upload routes

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Start the server on the specified port or default to 5001
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
