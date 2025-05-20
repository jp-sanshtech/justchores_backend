const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true,
        unique: true
    },
    profileImage: {
        type: String,
        default: '' // Can be a URL or base64
    }
}, { timestamps: true });

module.exports = mongoose.model('Profile', ProfileSchema);
