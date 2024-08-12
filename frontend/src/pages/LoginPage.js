import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css'; // Reuse the styles from RegisterPage

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const history = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Login form submitted");

        try {
            const res = await axios.post('http://localhost:5000/api/users/login', {
                email,
                password
            });
            console.log("Login successful:", res.data);

            localStorage.setItem('authToken', res.data.token);
            history('/restaurants');
        } catch (err) {
            console.error("Login error:", err);
            setError(err.response?.data?.message || 'Login failed');
        }
    };

    return (
        <div className="form-page">
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleLogin}>
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
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default LoginPage;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');
//     const navigate = useNavigate();

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         console.log("Login form submitted", { email, password });

//         try {
//             const res = await axios.post('http://localhost:5000/api/users/login', {
//                 email,
//                 password
//             });
//             console.log("Login successful:", res.data);

//             localStorage.setItem('authToken', res.data.token);
//             navigate('/restaurants');  // Change to the route you want to redirect to after login
//         } catch (err) {
//             console.error("Login error:", err);
//             setError(err.response?.data?.message || 'Login failed');
//         }
//     };

//     return (
//         <div>
//             <h2>Login</h2>
//             {error && <p style={{ color: 'red' }}>{error}</p>}
//             <form onSubmit={handleLogin}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// }

// export default LoginPage;
