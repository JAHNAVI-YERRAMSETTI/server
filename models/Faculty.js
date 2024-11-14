const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    department: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        required: true,
    },
    hireDate: {
        type: Date,
        default: Date.now,
    },
    courses: [{
        type: String, // Array of course IDs or names
    }],
});

// Create the Faculty model
const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;
