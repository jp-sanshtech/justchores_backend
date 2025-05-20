const express = require('express');
const router = express.Router();
const { createProfile, getProfile , updateProfile} = require('../controllers/ProfileController');

// POST to create a new profile
router.post('/create-profile', createProfile);

// GET to fetch profile by phone number
router.get('/profile/:phoneNumber', getProfile);
router.put('/update-profile/:phoneNumber', updateProfile);


module.exports = router;
