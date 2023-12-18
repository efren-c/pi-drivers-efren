import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(driver) {
    return (
        <Link to={`/detail/${driver.id}`}>
            <h2>Name: {driver.name}</h2>
        </Link>
    )
}
