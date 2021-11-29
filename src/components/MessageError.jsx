import React from 'react'

export const MessageError = ({ title }) => {
    return (
        <p className='container text-danger mt-0'>
            {title}
        </p>
    )
}
