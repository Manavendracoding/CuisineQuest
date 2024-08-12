import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/api/places', async (req, res) => {
  try {
    // Get latitude and longitude from query parameters
    const { lat, lng } = req.query;

    if (!lat || !lng) {
      return res.status(400).json({ error: 'Latitude and Longitude are required' });
    }

    const radius = 1500;
    const type = 'restaurant';

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status === 'OK') {
      res.json(data.results);
    } else {
      res.status(500).json({ error: 'Failed to fetch places from Google Maps API' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
