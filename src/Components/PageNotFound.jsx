import React from 'react'
import { useNavigate } from 'react-router-dom'

function PageNotFound() {
    const navigate = useNavigate()
    return (
        <div>
            <img 
            src='https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-6.png.webp' />
            <button onClick={() => navigate("/")} >Back to Home</button>
        </div>
    )
}

export default PageNotFound
