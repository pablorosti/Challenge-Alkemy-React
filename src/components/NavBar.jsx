import React from 'react'
import { useNavigate } from 'react-router';

export const NavBar = () => {
    const navigate = useNavigate();
    const handleLogoutClick = () => {
        localStorage.removeItem('token');
        navigate('/login')
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <p className="navbar-brand m-0">Challenge Alkemy</p>
                <button to='/login' className="btn btn-sm btn-dark" onClick={handleLogoutClick}>Cerrar sesión</button>
            </div>
        </nav>
    )
}
