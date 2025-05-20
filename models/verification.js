const mongoose = require('mongoose');

const VerificationSchema = new mongoose.Schema({
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    otp: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: 300 } // OTP expires after 5 minutes (300 seconds)
    }
});

module.exports = mongoose.model('Verification', VerificationSchema);
