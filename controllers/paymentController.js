const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const createPaymentIntent = async (req, res) => {
    try {
        const { amount, currency, customer_id } = req.body;
        console.log('STRIPE_SECRET_KEY:', process.env.STRIPE_SECRET_KEY);

        // If customer_id is not provided, you can create a new customer
        let customer;
        if (!customer_id) {
            // Create a new customer with Canada as the default country
            customer = await stripe.customers.create({
                address: {
                    country: 'CA'
                }
            });
        } else {
            customer = { id: customer_id };
        }
        
        // Create an ephemeral key for the customer
        const ephemeralKey = await stripe.ephemeralKeys.create(
            { customer: customer.id },
            { apiVersion: '2023-10-16' }
        );
        
        // Create a payment intent with CAD as default currency
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: currency || 'cad',
            customer: customer.id,
            automatic_payment_methods: { enabled: true }
        });
        
        // Return the necessary information to the client
        res.json({
            paymentIntentClientSecret: paymentIntent.client_secret,
            ephemeralKeySecret: ephemeralKey.secret,
            customer: customer.id,
            publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
        });
    } catch (error) {
        console.error('Error creating payment intent:', error);
        res.status(500).json({ error: error.message });
    }
};

const getPublishableKey = (req, res) => {
    try {
        res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
    } catch (error) {
        console.error('Error fetching publishable key:', error);
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createPaymentIntent,
    getPublishableKey
}; 