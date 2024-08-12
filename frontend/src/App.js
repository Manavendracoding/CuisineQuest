// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import RestaurantPage from './pages/RestaurantPage';
import ItalianPage from './pages/ItalianPage';
import MexicanPage from './pages/MexicanPage';
import JapanesePage from './pages/JapanesePage';
import IndianPage from './pages/IndianPage';
import ChinesePage from './pages/ChinesePage';
import FrenchPage from './pages/FrenchPage';
import './App.css';


function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/restaurants">Restaurants</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                {/* Define the route for the home page */}
                <Route path="/" exact element={<HomePage />} />
                {/* Define the route for the login page */}
                <Route path="/login" element={<LoginPage />} />
                {/* Define the route for the registration page */}
                <Route path="/register" element={<RegisterPage />} />
                {/* Define the route for the restaurant page */}
                <Route path="/restaurants" element={<RestaurantPage />} />
                <Route path="/italian" element={<ItalianPage />} />
                <Route path="/mexican" element={<MexicanPage />} />
                <Route path="/japanese" element={<JapanesePage />} />
                <Route path="/indian" element={<IndianPage />} />
                <Route path="/chinese" element={<ChinesePage />} />
                <Route path="/french" element={<FrenchPage />} />
//             </Routes>
            </div>
        </Router>
    );
}

export default App;


