import express from 'express';
import { connectDB } from "./src/db/service/util-service";
import "dotenv/config";
import IFood from "./src/db/models/food-model";
import IUser from "./src/db/models/user-model";
import IUserModel from "./src/db/models/user-model";
import IFoodModel from "./src/db/models/food-model";


const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

const getRouter = require('./src/routes/get-routes');

console.log('getRouter:', getRouter); // Debugging-Statement

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

app.use(cors(corsOptions));
app.use('/vitamins', getRouter);

async function startApp() {
    await connectDB();
    app.listen(8080, () => {
        console.log('App now listening for requests on port 8080');
    });
}

startApp();

async function insertTestData() {
    const testFoods = [
        {
            name: 'Apple',
            vitaminA: 54, // in micrograms
            vitaminC: 4.6, // in milligrams
            carbohydrates: 14, // in grams
            protein: 0.3, // in grams
            fat: 0.2, // in grams
            fiber: 2.4, // in grams
            sugars: 10, // in grams
            calcium: 6, // in milligrams
            iron: 0.12, // in milligrams
            magnesium: 5, // in milligrams
            phosphorus: 11, // in milligrams
            potassium: 107, // in milligrams
            sodium: 1, // in milligrams
            zinc: 0.04, // in milligrams
            copper: 0.03, // in milligrams
            manganese: 0.04, // in milligrams
            selenium: 0.1 // in micrograms
        },
        {
            name: 'Banana',
            vitaminA: 64, // in micrograms
            vitaminC: 8.7, // in milligrams
            carbohydrates: 22.8, // in grams
            protein: 1.1, // in grams
            fat: 0.3, // in grams
            fiber: 2.6, // in grams
            sugars: 12.2, // in grams
            calcium: 5, // in milligrams
            iron: 0.26, // in milligrams
            magnesium: 27, // in milligrams
            phosphorus: 22, // in milligrams
            potassium: 358, // in milligrams
            sodium: 1, // in milligrams
            zinc: 0.15, // in milligrams
            copper: 0.08, // in milligrams
            manganese: 0.27, // in milligrams
            selenium: 1.0 // in micrograms
        }
        // Weitere Testdaten hinzufügen
    ];

    const testUsers = [
        {
            name: 'Leon',
            password: 'Leon',
            email: 'someosdjfö'
        },
        {
            name: 'Jane Smith',
            password: 'password456',
            email: 'someosdjfö'
        }
        // Weitere Testbenutzer hinzufügen
    ];

    try {
        // await IFoodModel.insertMany(testFoods);
        // console.log('Testdaten für Lebensmittel erfolgreich eingefügt');

        await IUserModel.insertMany(testUsers);
        console.log('Testdaten für Benutzer erfolgreich eingefügt');
    } catch (error) {
        console.error('Fehler beim Einfügen der Testdaten:', error);
    }
}

// insertTestData();