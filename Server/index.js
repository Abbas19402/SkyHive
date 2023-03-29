const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { errorHandler } = require('./utils/middleware');
const authRouter = require('./routes/auth');
const bookingsRouter = require('./routes/bookings');
const flightsRouter = require('./routes/flights');

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/auth', authRouter);
app.use('/bookings', bookingsRouter);
app.use('/flights', flightsRouter);

app.use(errorHandler);

module.exports = app;
