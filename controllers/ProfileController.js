const Profile = require('../models/Profile');

// Create a new profile
exports.createProfile = async (req, res) => {
    const { firstName, lastName, email, phoneNumber, profileImage } = req.body;

    try {
        const exists = await Profile.findOne({ phoneNumber });
        if (exists) return res.status(400).json({ message: 'Profile already exists for this phone number.' });

        const profile = new Profile({ firstName, lastName, email, phoneNumber, profileImage });
        await profile.save();

        res.status(201).json({ message: 'Profile created successfully', profile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to create profile', error });
    }
};

// Get profile by phone number
exports.getProfile = async (req, res) => {
    const { phoneNumber } = req.params;

    try {
        const profile = await Profile.findOne({ phoneNumber });
        if (!profile) return res.status(404).json({ message: 'Profile not found' });

        res.status(200).json(profile);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch profile', error });
    }
};

// Update profile by phone number
exports.updateProfile = async (req, res) => {
    const { phoneNumber } = req.params;
    const { firstName, lastName, email, profileImage } = req.body;

    try {
        const profile = await Profile.findOne({ phoneNumber });

        if (!profile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        // Update fields
        if (firstName) profile.firstName = firstName;
        if (lastName) profile.lastName = lastName;
        if (email) profile.email = email;
        if (profileImage) profile.profileImage = profileImage;

        await profile.save();

        res.status(200).json({ message: 'Profile updated successfully', profile });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to update profile', error });
    }
};
