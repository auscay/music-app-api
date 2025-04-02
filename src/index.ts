import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { config } from './config';
import { dbConnection } from './database/connection';
import { artistRoutes, eventRoutes, bookingRoutes } from './routes';

dotenv.config();
const app = express();
const PORT = config.PORT || 9090;
const uri = config.MONGO_URI || '';

// Enable Helmet for securing HTTP headers
app.use(helmet());

// Apply Rate Limiting - Limits requests to 100 per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2, // Limit each IP to 100 requests per window
  message: { success: false, message: "Too many requests, please try again later." }
});

app.use(limiter);

const startServer = async () => {
    await dbConnection(uri);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
};

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/api/artists', artistRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/bookings', bookingRoutes);

startServer();