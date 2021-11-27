import React from 'react'

export const ProgressBar = ({ title, total }) => {
    return (
        <div>
            <div className="progress mb-1">
                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: total + "%" }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="300">{title +" "+ total}</div>
            </div>
        </div>
    )
}
