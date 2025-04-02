import dotenv from 'dotenv';
dotenv.config();

const config = {
    PORT: process.env.PORT || 9090,
    MONGO_URI: process.env.MONGO_URI,
}

export  { config };