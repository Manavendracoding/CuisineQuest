import React, { useState, useEffect } from 'react';

const PlacesList = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=28.4595,77.0266&radius=1500&type=restaurant&key=AIzaSyBYx2xH7nFqgPNy6-K5nkOjke_ecbzhMlA`
        );
        const data = await response.json();
        if (data.status === 'OK') {
          setPlaces(data.results);
        } else {
          setError('Failed to fetch places.');
        }
      } catch (err) {
        console.log(err)
        setError('Error fetching places.');
      } finally {
        setLoading(false);
      }
    };

    fetchPlaces();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {places.map((place) => (
        <div key={place.place_id} style={styles.card}>
          <h3>{place.name}</h3>
          <p>{place.vicinity}</p>
          <p>Rating: {place.rating} ({place.user_ratings_total} reviews)</p>
          <div style={styles.imageContainer}>
            {place.photos && place.photos.length > 0 && (
              <img
                src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=AIzaSyBYx2xH7nFqgPNy6-K5nkOjke_ecbzhMlA`}
                alt={place.name}
                style={styles.image}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    width: '100%',
    maxWidth: '400px',
  },
  imageContainer: {
    marginTop: '8px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
};

export default PlacesList;


// import React from 'react';

// const PlacesList = ({ places }) => {
//   return (
//     <div>
//       {places.map((place) => (
//         <div key={place.place_id} style={styles.card}>
//           <h3>{place.name}</h3>
//           <p>{place.vicinity}</p>
//           <p>Rating: {place.rating} ({place.user_ratings_total} reviews)</p>
//           <div style={styles.imageContainer}>
//             {place.photos && place.photos.length > 0 && (
//               <img
//                 src={`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${place.photos[0].photo_reference}&key=YOUR_API_KEY`}
//                 alt={place.name}
//                 style={styles.image}
//               />
//             )}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const styles = {
//   card: {
//     border: '1px solid #ccc',
//     borderRadius: '8px',
//     padding: '16px',
//     marginBottom: '16px',
//     width: '100%',
//     maxWidth: '400px',
//   },
//   imageContainer: {
//     marginTop: '8px',
//   },
//   image: {
//     width: '100%',
//     height: 'auto',
//     borderRadius: '8px',
//   },
// };

// export default PlacesList;
