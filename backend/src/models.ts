import mongoose, { Schema, Document } from 'mongoose';

export interface IFood extends Document {
    name: string;
    amount: number;
    vitaminA?: number;
    vitaminB1?: number;
    vitaminB2?: number;
    vitaminB3?: number;
    vitaminB5?: number;
    vitaminB6?: number;
    vitaminB7?: number;
    vitaminB9?: number;
    vitaminB12?: number;
    vitaminC?: number;
    vitaminD?: number;
    vitaminE?: number;
    vitaminK?: number;
    carbohydrates?: number;
    protein?: number;
    fat?: number;
    fiber?: number;
    sugars?: number;
    calcium?: number;
    iron?: number;
    magnesium?: number;
    phosphorus?: number;
    potassium?: number;
    sodium?: number;
    zinc?: number;
    copper?: number;
    manganese?: number;
    selenium?: number;
}

const FoodSchema: Schema = new Schema({
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    vitaminA: Number,
    vitaminB1: Number,
    vitaminB2: Number,
    vitaminB3: Number,
    vitaminB5: Number,
    vitaminB6: Number,
    vitaminB7: Number,
    vitaminB9: Number,
    vitaminB12: Number,
    vitaminC: Number,
    vitaminD: Number,
    vitaminE: Number,
    vitaminK: Number,
    carbohydrates: Number,
    protein: Number,
    fat: Number,
    fiber: Number,
    sugars: Number,
    calcium: Number,
    iron: Number,
    magnesium: Number,
    phosphorus: Number,
    potassium: Number,
    sodium: Number,
    zinc: Number,
    copper: Number,
    manganese: Number,
    selenium: Number,
});

export const Food = mongoose.model<IFood>('Food', FoodSchema);

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

export const User = mongoose.model<IUser>('User', UserSchema);
