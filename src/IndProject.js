import React, { useState } from 'react'
import Modal from 'react-modal'
// import Areii from './images/Areii.PNG'


const IndProject = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel={props.name}
            >
                <h2>{props.name}</h2>
                <p>{props.desc}</p>
                <ul>
                    { props.languages.map((ind, i) => <li key={i}>{ind}</li>)}
                </ul>
                <a class="launchBtn" href={props.link} alt={props.name} target="_blank" rel="noopener noreferrer"><button>Launch Page</button></a>
            </Modal>
            <div onClick={openModal} className='project'>
                <div className={props.imgUrl}></div>
                <h2>{props.name}</h2>
            </div>
        </>
    )
}

export default IndProject