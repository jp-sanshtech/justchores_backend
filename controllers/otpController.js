const Verification = require('../models/verification');

exports.sendOTP = async (req, res) => {
    const { phoneNumber } = req.body;
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a 6-digit OTP

    try {
        const newVerification = new Verification({ phoneNumber, otp });
        await newVerification.save();

        // Here, you would integrate an actual SMS service to send the OTP
        console.log(`OTP ${otp} sent to ${phoneNumber}`); // Simulate sending OTP

        res.status(200).json({ message: 'OTP sent successfully!', otp }); // Send OTP back for testing purposes
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send OTP', error });
    }
};

exports.verifyOTP = async (req, res) => {
    const { phoneNumber, otp } = req.body;

    try {
        const verification = await Verification.findOne({ phoneNumber, otp });
        if (verification) {
            res.status(200).json({ message: 'OTP is valid', success: true });
        } else {
            res.status(400).json({ message: 'Invalid OTP or OTP expired', success: false });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error verifying OTP', success: false, error });
    }
};
