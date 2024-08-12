// frontend/src/pages/RegisterPage.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState(''); // Add state for phone number
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        console.log("Form submitted");

        try {
            const res = await axios.post('http://localhost:5000/api/users/register', {
                name,
                email,
                password,
                phone // Include phone number in the request
            });
            console.log("Registration successful:", res.data);

            localStorage.setItem('authToken', res.data.token);
            history('/login');
        } catch (err) {
            console.error("Registration error:", err);
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="form-page">
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="tel" // Change type to tel for phone number
                    placeholder="Phone Number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegisterPage;
