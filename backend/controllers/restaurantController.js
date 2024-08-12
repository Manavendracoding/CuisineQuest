const Restaurant = require('../models/Restaurant');

exports.getRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.find();
        res.json(restaurants);
        res.header("Access-Control-Allow-Origin","*");
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addRestaurant = async (req, res) => {
    const { name, address, cuisine, rating, reviews } = req.body;

    try {
        const newRestaurant = new Restaurant({
            name,
            address,
            cuisine,
            rating,
            reviews,
        });

        const savedRestaurant = await newRestaurant.save();
        res.status(201).json(savedRestaurant);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addReview = async (req, res) => {
    const { restaurantId, user, comment } = req.body;

    try {
        const restaurant = await Restaurant.findById(restaurantId);

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        restaurant.reviews.push({ user, comment });

        const updatedRestaurant = await restaurant.save();
        res.status(201).json(updatedRestaurant);
    } catch (error) {
        console.error("Server error:", error);
        res.status(500).json({ message: 'Server error' });
    }
};
