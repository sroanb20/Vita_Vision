import express from 'express';
import { Food, User } from './models';

const router = express.Router();

// Food Routes
router.get('/foods', async (req, res) => {
    const foods = await Food.find();
    res.json(foods);
});

router.post('/foods', async (req, res) => {
    const newFood = new Food(req.body);
    const savedFood = await newFood.save();
    res.json(savedFood);
});

router.put('/foods/:id', async (req, res) => {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedFood);
});

router.delete('/foods/:id', async (req, res) => {
    await Food.findByIdAndDelete(req.params.id);
    res.json({ message: 'Food deleted' });
});

// User Routes
router.get('/users', async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.post('/users', async (req, res) => {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
});

router.put('/users/:id', async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedUser);
});

router.delete('/users/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
});

export default router;
