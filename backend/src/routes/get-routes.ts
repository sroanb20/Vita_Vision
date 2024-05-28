import express from "express";
import UserModel from "../db/models/user-model";



const getRouter = express.Router();

getRouter.get('/getUsers', async(req, res) => {
    try {
        const user = await UserModel.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: 'Fehler beim Abrufen der Users', error});
    }
});

getRouter.get('/getFood', async(req, res) => {
    try {
        const food = await UserModel.find();
        res.status(200).json(food);
    }catch (error) {
        res.status(500).json({message: 'Fehler beim Abrufen der Foods', error});
    }
});

module.exports = getRouter;
