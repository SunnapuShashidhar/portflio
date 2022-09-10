import React from 'react'
import "../App.css"
function RecomandCard(props) {
    const { name, email, company, message, designation } = props.recomand;
    return (
        <div className='h-100'>
            <div className="crd card shadow h-100">
                <div className="card-body">
                    <h4 className="card-title">{message}</h4>
                    <p className="card-text">{name}<br />{email} <br />{designation} at {company} </p>
                </div>
            </div>
        </div>
    )
}

export default RecomandCard;