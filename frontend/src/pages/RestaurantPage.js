import React, { useState, useEffect } from 'react';
import './RestaurantPage.css';

const PlacesList = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async (latitude, longitude) => {
      try {
        const response = await fetch(`http://localhost:5000/api/places?lat=${latitude}&lng=${longitude}`);
        console.log('Response:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPlaces(data);
      } catch (err) {
        console.error('Fetch error:', err);
        setError('Error fetching places.');
      } finally {
        setLoading(false);
      }
    };    

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            fetchPlaces(latitude, longitude);
          },
          (error) => {
            setError('Unable to retrieve your location.');
            setLoading(false);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
        setLoading(false);
      }
    };

    getUserLocation();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="image-gallery">
      {places.map((place) => (
        <div key={place.place_id} className="image-item">
          {place.photos && place.photos.length > 0 && (
            <img
              src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=AIzaSyBYx2xH7nFqgPNy6-K5nkOjke_ecbzhMlA`}
              alt={place.name}
            />
          )}
          <p>{place.name}</p>
          <p>{place.vicinity}</p>
          <p>Rating: {place.rating} ({place.user_ratings_total} reviews)</p>
        </div>
      ))}
    </div>
  );
};

export default PlacesList;
