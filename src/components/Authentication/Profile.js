import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css'; // Import the CSS module
import NavBar from '../NavBar';

const Profile = () => {
    const [userData, setUserData] = useState({})
    const getUserData = () => {
        const userData = localStorage.getItem("appointment_user")
        const user = JSON.parse(userData)
        setUserData({...user})
    }
    useEffect(() => {
        getUserData()
    }, [])
    return (
        <>
            <NavBar></NavBar>
            <div className={styles.profile}>
                <h2>User Profile</h2>
                <div className={styles.info}>
                    <div className={styles.row}>
                        <span className={styles.label}>Name: </span>
                        <span className={styles.value}>{userData?.username}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>Email:</span>
                        <span className={styles.value}>{userData?.email}</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Profile;
