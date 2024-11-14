const express = require('express');
const router = express.Router();
const FacultyController = require('../controllers/facultyController');


router.get('/', FacultyController.getAllFaculty);

router.get('/:id', FacultyController.getFacultyById);

router.post('/', FacultyController.createFaculty);

router.put('/:id', FacultyController.updateFaculty);

router.delete('/:id', FacultyController.deleteFaculty);

module.exports = router;
