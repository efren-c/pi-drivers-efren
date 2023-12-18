import React from 'react'
import { useNavigate } from 'react-router-dom'



export default function Landing() {
    const navigate = useNavigate()

    return (
        <div>
            <button onClick={() => navigate('/home')}>Home</button>
        </div>
    )
}
