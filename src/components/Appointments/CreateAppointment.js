import React, { useState } from 'react';
import styles from './CreateAppointment.module.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import axios from 'axios';
import { BASE_URL } from '../../constant';

const CreateAppointment = () => {
    // State variables for form data
    const navigate = useNavigate()
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [purpose, setPurpose] = useState('');
    const [location, setLocation] = useState('');

    // Handler function to save form data
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const userData = localStorage.getItem("appointment_user")
        const user = JSON.parse(userData)
        // const appointment = localStorage.getItem("appointment")
        const appointment = { date, time, purpose, location, username: user?.username}
        const data = await axios.post(`${BASE_URL}/addAppointment`, appointment)
        if(data.data === "Success"){
            navigate("/appointment_list")
        }
    };

    return (
        <>
            <NavBar></NavBar>
            <div className={styles.createAppointmentContainer}>
                <h2>Create Appointment</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles.formGroup}>
                        <label>Date</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Time</label>
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div className={styles.formGroup}>
                        <label>Purpose</label>
                        <textarea rows="4" value={purpose} onChange={(e) => setPurpose(e.target.value)}></textarea>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Location</label>
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <button type="submit" className={styles.submitButton}>Create</button>
                </form>
            </div>
        </>
    );
}

export default CreateAppointment;
