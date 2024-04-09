import React, { useEffect, useState } from 'react';
import styles from './AdminPanel.module.css';
import NavBar from '../NavBar';
import axios from 'axios';
import { BASE_URL } from '../../constant';

const data = [
    {
        username: "test1",
        password: "testing1",
        email: "email1"
    },
    {
        username: "test2",
        password: "testing2",
        email: "email2"
    },
    {
        username: "test3",
        password: "testing3",
        email: "email3"
    },
    {
        username: "test4",
        password: "testing4",
        email: "email4"
    }
];





const AdminPanel = () => {
    const [users, setUsers] = useState([])

    const getAllUsers = async () => {
        const userData = localStorage.getItem("appointment_user")
        const user = JSON.parse(userData)
        const data = await axios.get(`${BASE_URL}/getUsers?username=${user.username}`)
        if (data?.data) {
            setUsers(data.data)
        }
    }

    useEffect(() => {
        getAllUsers()
    }, [])


    return (
        <>
            <NavBar></NavBar>
            <div className={styles.adminPanelContainer}>
                <h2>Admin Panel</h2>
                {users.map((item, i) => (
                    <div className={styles.adminPanelItem} key={i}>
                        <p>username: {item.username}</p>
                        <p>Password: {item.password}</p>
                        <p>Email: {item.email}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default AdminPanel;
