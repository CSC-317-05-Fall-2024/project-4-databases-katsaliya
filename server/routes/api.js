import express from 'express';
import { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant } from '../data/restaurants.js';

const router = express.Router();

// route get all restaurants 
router.get('/restaurants', (req, res) => {
    const restaurants = getRestaurants();
    res.json(restaurants);
});

// route to get specific restaurant by ID
router.get('/restaurants/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id, 10);
    const restaurant = getRestaurant(restaurantId);
    
    if(restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).json({ error:'Restaurant not found' });
    }
});

// route to create a new restaurant
router.post('/restaurants', (req, res) => {
    const newRestaurant = req.body;
    const createdRestaurant = createRestaurant(newRestaurant);
    res.status(201).json(createdRestaurant);
})

router.delete('/restaurants/:id', (req, res) => {
    const restaurantId = parseInt(req.params.id, 10);
    deleteRestaurant(restaurantId);
    res.status(204).send();
});

export {router as backendRouter};