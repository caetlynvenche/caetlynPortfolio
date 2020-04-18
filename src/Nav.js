import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <header>
            <nav>
                <Link exact to="/">Home</Link>
                <Link to="/projects">Projects</Link>
            </nav>
        </header>
    )
}

export default Nav