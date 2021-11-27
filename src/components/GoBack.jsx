import React from 'react'
import { useNavigate } from 'react-router-dom';

export const GoBack = () => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(-1)} className='btn btn-primary mb-2'> <i className="fas fa-arrow-left"></i> Volver</button>
    )
}
