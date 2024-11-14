const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');

// Route for uploading a single file
router.post('/upload/single', uploadController.uploadSingle);

// Route for uploading multiple files
router.post('/upload/multiple', uploadController.uploadMultiple);

module.exports = router;
