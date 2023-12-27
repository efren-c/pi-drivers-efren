import React from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import './detail.styles.css'

const Detail = () => {
    const { id } = useParams()
    const [driverDetail, setDriverDetail] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getAxios = async () => {
            try {
                const response = await axios(`http://localhost:3001/drivers/${id}`)
                setDriverDetail(response.data)
            } catch (error) {
                console.error("Error al obtener datos:", error)
            } finally {
                setLoading(false)
            }
        }

        return getAxios()
    }, [id])

    useEffect(() => {
    }, [driverDetail])

    if (loading) {
        return <p>Cargando...</p>
    }

    return (
        <div className="content">
            <h2>{driverDetail.name.forename} {driverDetail.name.surname}</h2>
            <p> {driverDetail.team.name} </p>
            <img
                src={driverDetail.image.url}
                width="600px"
                height="auto"
                alt="Cargando..."
            />
            <p>Nationality: {driverDetail.nationality} </p>
            <p>Date of birth: {driverDetail.dob} </p>
            <article>{driverDetail.description}</article>
        </div>
    )
}

export default Detail