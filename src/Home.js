import React from 'react'
import WhoAmI from './WhoAmI'
import Resume from './Resume'
import Skills from './Skills'
import Links from './Links'
import ContactMe from './ContactMe'

const Home = () => {
    return (
        <div>
            <WhoAmI />
            
            <Resume />

            <Skills />

            <Links />
            
            <ContactMe />
        </div>
    )
}

export default Home