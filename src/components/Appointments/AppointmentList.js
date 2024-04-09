import React, { useEffect, useState } from 'react';
import styles from './AppointmentList.module.css';
import { useNavigate } from 'react-router-dom';
import NavBar from '../NavBar';
import axios from 'axios';
import { BASE_URL } from '../../constant';

const AppointmentList = () => {

    const [appointments, setAppointments] = useState([])
    const navigate = useNavigate()
    const createAppointment = () => {
        navigate("/create_appointment")
    }


    const getAppointmentsList = async () => {
        const userData = localStorage.getItem("appointment_user")
        const user = JSON.parse(userData)
        const data = await axios.get(`${BASE_URL}/getMyAppointments?username=${user?.username}`)
        if (data?.data) {
            setAppointments(data?.data)
        }
    }

    const deleteAppointment = async (id) => {
        const data = await axios.post(`${BASE_URL}/deleteAppointment?id=${id}`)
        if(data?.data === "Success"){
            getAppointmentsList()
        }
    }
    useEffect(() => {
        getAppointmentsList()
    }, [])
    return (
        <>
            <NavBar></NavBar>
            <div className={styles.appointmentListContainer}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <h2>Appointment List</h2>
                    <button onClick={createAppointment}>Create Appointment</button>
                </div>
                {appointments.map((data, i) => <div key={i} className={styles.appointmentItem}>
                    <div>
                        <p>Date: {data.date}</p>
                        <p>Time: {data.time}</p>
                        <p>Purpose: {data.purpose}</p>
                        <p>Location: {data.location}</p>
                        {data?.done &&
                            <p style={{ fontWeight: "bold", color: "green" }}>Appointment Completed</p>
                        }
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
                        {!data?.done && <>
                            {/* <button style={{ backgroundColor: "green" }} onClick={() => doneAppointment(i)}>Done</button> */}
                            {/* <p></p> */}
                            <button style={{ backgroundColor: "red" }} onClick={() => deleteAppointment(data.id)}>Delete</button>
                        </>
                        }
                    </div>
                </div>)
                }
            </div >
                {appointments.length === 0 &&
                 <div style={{textAlign: 'center'}}>No Appointments Yet</div>
                }
        </>
    );
}

export default AppointmentList;

