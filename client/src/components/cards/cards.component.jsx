import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllDrivers } from '../../redux/actions'
import Card from '../card/card.component'
import './cards.styles.css'

function Cards() {
    const [drivers, setDrivers] = useState([])
    const allDrivers = useSelector((state) => state.allDrivers)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllDrivers())
    }, [dispatch])

    const firstTenDrivers = allDrivers.slice(0, 10)

    return (
        <div>
            <div className='cards-container'>
                {firstTenDrivers.map((driver) => (
                    <Card key={driver.id} driver={driver} />
                ))}
            </div>
        </div>
    )
}

export default Cards