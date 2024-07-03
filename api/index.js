import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(cors());

app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to Mongodb');
  })
  .catch((err) => {
    console.error('Error connecting to Mongodb:', err.message);
    console.error('Error Details:', err);
  });

app.use(express.json());

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.use((err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
