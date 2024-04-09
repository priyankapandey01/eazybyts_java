import { NavLink } from "react-router-dom";

function NavBar() {
    const userData = localStorage.getItem("appointment_user")
    const user = JSON.parse(userData)

    return (<div style={{
        background: "#000",
        minHeight: 30,
        display: 'flex',
        alignItems: 'center'
    }}>
        {user?.username === "admin" &&
            <NavLink to="/admin_panel" style={{
                textDecoration: 'none',
                color: "#fff",
                margin: 10,
                display: 'block'
            }}>Admin</NavLink>
        }
        <NavLink to="/appointment_list" style={{
            textDecoration: 'none',
            color: "#fff",
            margin: 10,
            display: 'block'
        }}>Appointments</NavLink>
        <NavLink to="/profile" style={{
            textDecoration: 'none',
            color: "#fff",
            margin: 10,
            display: 'block'
        }}>Profile</NavLink>
    </div>);
}

export default NavBar