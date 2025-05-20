const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables first
dotenv.config();

const otpRouter = require('./routes/otpRoutes');
const categoryRouter = require('./routes/categoryRouter');
const serviceRouter = require('./routes/serviceRouter');
const profileRouter = require('./routes/profileRoutes');
const paymentRouter = require('./routes/paymentRoutes');

const app = express();


app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Register routes
app.use('/api', otpRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/services', serviceRouter);
app.use('/api', profileRouter);
app.use('/api/payments', paymentRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
