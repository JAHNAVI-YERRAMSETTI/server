const multer = require('multer');
const path = require('path');

// Set up storage configuration for multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Specify the directory to save uploaded files
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname)); // Create a unique filename
    }
});

// Initialize multer with the storage configuration
const upload = multer({ storage: storage });

// Upload a single file
exports.uploadSingle = (req, res) => {
    upload.single('file')(req, res, (err) => {
        if (err) {
            return res.status(400).json({ message: 'Error uploading file', error: err.message });
        }
        res.status(200).json({ message: 'File uploaded successfully', file: req.file });
    });
};

// Upload multiple files
exports.uploadMultiple = (req, res) => {
    upload.array('files', 10)(req, res, (err) => { // Limit to 10 files
        if (err) {
            return res.status(400).json({ message: 'Error uploading files', error: err.message });
        }
        res.status(200).json({ message: 'Files uploaded successfully', files: req.files });
    });
};
