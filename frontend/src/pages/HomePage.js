import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Restaurant1 from '../images/Restaurant1.jpg';
import Restaurant2 from '../images/Restaurant2.jpeg';
import Restaurant3 from '../images/Restaurant3.jpeg';
import Restaurant4 from '../images/Restaurant4.jpg';
import Restaurant5 from '../images/Restaurant3.jpeg';
import Restaurant6 from '../images/Restaurant4.jpg';

function HomePage() {
    return (
        <div className="home">
            <h1>Welcome to Cuisine Quest</h1>
            <p>Discover the best restaurants near you!</p>
            <div className="image-gallery">
                <div className="image-item">
                    <img src={Restaurant1} alt="Italian" />
                    <Link to="/italian"><p>Italian</p></Link>
                </div>
                <div className="image-item">
                    <img src={Restaurant2} alt="Mexican" />
                    <Link to="/mexican"><p>Mexican</p></Link>
                </div>
                <div className="image-item">
                    <img src={Restaurant3} alt="Japanese" />
                    <Link to="/japanese"><p>Japanese</p></Link>
                </div>
                <div className="image-item">
                    <img src={Restaurant4} alt="Indian" />
                    <Link to="/indian"><p>Indian</p></Link>
                </div>
                <div className="image-item">
                    <img src={Restaurant5} alt="Chinese" />
                    <Link to="/chinese"><p>Chinese</p></Link>
                </div>
                <div className="image-item">
                    <img src={Restaurant6} alt="French" />
                    <Link to="/french"><p>French</p></Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;


// import React from 'react';
// import './HomePage.css';
// import Restaurant1 from '../images/Restaurant1.jpg';
// import Restaurant2 from '../images/Restaurant2.jpeg';
// import Restaurant3 from '../images/Restaurant3.jpeg';
// import Restaurant4 from '../images/Restaurant4.jpg';
// import Restaurant5 from '../images/Restaurant3.jpeg';
// import Restaurant6 from '../images/Restaurant4.jpg';

// function HomePage() {
//     return (
//         <div className="home">
//             <h1>Welcome to Cuisine Quest</h1>
//             <p>Discover the best restaurants near you!</p>
//             <div className = "image-gallery">
//                 <div className = "image-item">
//                     <img src = {Restaurant1}/>
//                     <p>Fine Dining</p>
//                 </div>
//                 <div className = "image-item">
//                     <img src = {Restaurant2}/>
//                     <p>Outdoor</p>
//                 </div>
//                 <div className = "image-item">
//                     <img src = {Restaurant3}/>
//                     <p>Chinese</p>
//                 </div>
//                 <div className = "image-item">
//                     <img src = {Restaurant4}/>
//                     <p>North Indian</p>
//                 </div>
//                 <div className = "image-item">
//                     <img src = {Restaurant5}/>
//                     <p>Restaurant 5</p>
//                 </div>
//                 <div className = "image-item">
//                     <img src = {Restaurant6}/>
//                     <p>Restaurant 6</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomePage;