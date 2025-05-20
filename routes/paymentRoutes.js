const express = require('express');
const router = express.Router();
const { createPaymentIntent, getPublishableKey } = require('../controllers/paymentController');

// Payment routes
router.post('/create-payment-intent', createPaymentIntent);
router.get('/publishable-key', getPublishableKey);

module.exports = router; 