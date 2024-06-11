import mongoose from 'mongoose';

export async function connectDB() {
    // const mongoURI = process.env.MONGODB_URI;
    const mongoURI = "mongodb://localhost:27017/VitaVision";

    if (!mongoURI) {
        console.error('MONGODB_URI is not defined in environment variables.');
        process.exit(1);
    }

    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}