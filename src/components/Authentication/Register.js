import React, { useState } from 'react';
import styles from './Register.module.css'; // Import the CSS module
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from '../../constant';

const Register = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Call API to register user
        // handleRegister(username, email, password);
        const postData = {
            username, password, email
        }
        const data = await axios.post(`${BASE_URL}/registerUser`,postData)
        if(data.data === 'New user registered successfully'){
            localStorage.setItem("appointment_user", JSON.stringify(postData))
            navigate('/appointment_list');
        }else{
            alert(data.data)
        }
    };

    return (
        <div className={styles.register}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" required placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;
