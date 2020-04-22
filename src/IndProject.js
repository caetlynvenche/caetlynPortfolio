import React, { useState } from 'react'
import Modal from 'react-modal'
import { FaGithubSquare } from 'react-icons/fa'

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

                <div className='modalLinks'>
                    <a class="launchBtn" href={props.link} alt={props.name} target="_blank" rel="noopener noreferrer"><button>Launch Page</button></a>

                    {
                        props.github !== null
                        ? 
                        <a href={props.github} target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                        : null
                    }
                </div>
                
                
            </Modal>
            <div onClick={openModal} className='project'>
                <div className={props.imgUrl}></div>
                <h2>{props.name}</h2>
            </div>
        </>
    )
}

export default IndProject