import React from 'react'
import { Link } from 'react-router-dom'
import './card.styles.css'

export default function Card(driver) {
    return (
        <Link to={`/drivers/${driver.driver.id}`} className='card'>
            <h2>{driver.driver.name}</h2>
            <div className="driver-image" style={{ backgroundImage: `url(${driver.driver.image})` }}></div>
            <p> {driver.driver.dob} </p>
            <p>Nationality: {driver.driver.nationality}</p>
            {/* <button onClick={() => onclose(driver.driver.id)} >X</button> */}
        </Link>
    )
}