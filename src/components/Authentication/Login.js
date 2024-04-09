import React, { useState } from 'react';
import styles from './login.module.css'; // Import the CSS module
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constant';

const Login = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = { username, password }
        const data = await axios.post(`${BASE_URL}/login`, postData)
        if (data.data === 'Success') {
            localStorage.setItem("appointment_user", JSON.stringify(postData))
            navigate('/appointment_list');
        }
    };

    return (
        <div className={styles.login}> {/* Use the CSS module class */}
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className={styles.input} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className={styles.input} />
                <button type="submit" className={styles.button}>Login</button>
            </form>
        </div>
    );
}

export default Login;
