import app from './app';
import dotenv from 'dotenv';
import path from 'path';

// Load environment variables from db.env file
dotenv.config({ path: path.resolve(__dirname, '../db.env') });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
