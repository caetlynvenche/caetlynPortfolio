import React from 'react'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

const Links = () => {
    return (
        <div className="links">
            <a href="https://github.com/caetlynvenche?tab=repositories" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
            <a href="https://www.linkedin.com/in/caetlyn-venche/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
    )
}

export default Links