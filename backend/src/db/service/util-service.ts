import mongoose from "mongoose";


const DATABASE_URI = "mongodb+srv://jakleb20:HxbAjtYp1KkLU2vu@vitavision.zl3xf9q.mongodb.net/";

export async function connectDB() {
    try {
        await mongoose.connect(DATABASE_URI)
            .then(() => console.log('Connected to MongoDB'));
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}
