import React from 'react'
import Cards from '../../components/cards/cards.component'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import './home.styles.css'

export default function Home() {
    const [drivers, setDrivers] = useState()
    let allDrivers = useSelector((state) => state.allDrivers)

    useEffect(() => {
        if (allDrivers.length) { setDrivers(allDrivers) }
    })


    return (
        <div> <Cards driver={drivers} /> </div>
    )
}