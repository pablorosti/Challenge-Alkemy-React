import React from 'react'

export const MessageError = ({ title }) => {
    return (
        <p className='text-danger mt-0'>
            {title}
        </p>
    )
}
