const express = require('express');
const { getRestaurants, addRestaurant, addReview } = require('../controllers/restaurantController');

const router = express.Router();

router.get('/', getRestaurants);
router.post('/', addRestaurant);
router.post('/review', addReview);

module.exports = router;
