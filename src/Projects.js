import React from 'react'
import IndProject from './IndProject'
import { v4 as uuid } from 'uuid';

const projects = [
    {
        imgUrl: 'Areii',
        name: 'Areii Social Media',
        desc: 'Small scale social media platform with self created database through MongoDB, which I then connected with a front end application using React, styled with SCSS. Includeds User Authentification.',
        languages: ['React.js', 'SCSS', 'MongoDB', 'Mongoose', 'Express', 'Node.js'],
        link: 'https://areii.herokuapp.com/',
        key: uuid(),
        github: 'https://github.com/caetlynvenche/areii'
    },
    {
        imgUrl: 'Pawesome',
        name: 'Pawesome Pets',
        desc: 'This was a project done with a small group. We made a full stack application, with a database to store the pets for the "adoption company". It has full CRUD through postman, but not on the front end.',
        languages: ['React.js', 'SCSS', 'MongoDB', 'Mongoose', 'Express', 'Node.js'],
        link: 'https://pawesome-pets.herokuapp.com/',
        key: uuid(),
        github: 'https://github.com/caetlynvenche/PawesomePets'
    },
    {
        imgUrl: 'WerewolfRole',
        name: 'Werewolf Role Generator',
        desc: 'For a fun practice with Javascript and React, I created a generator where you could put in player names, select which specialty roles you wanted available, and have the code decide who gets which role. To be used with the Werewolf game.',
        languages: ['React.js', 'SCSS', 'Javascript'],
        link: 'https://caetlynwerewolf.surge.sh',
        github: 'https://github.com/caetlynvenche/caetlyn-werewolf',
        key: uuid()
    },
    {
        imgUrl: 'AdviceAPI',
        name: 'Advice API',
        desc: 'Using two different APIs and Context, I made a way to randomly generate an image and some advice, then save them to local storage to be deleted or selected on a different page to be displayed.',
        languages: ['React.js', 'SCSS', 'API'],
        link: 'https://caetlynadvice.surge.sh',
        key: uuid(),
        github: 'https://github.com/caetlynvenche/assignments/tree/master/projects/advice'
    },
    {
        imgUrl: 'Dalton',
        name: 'Dalton Cottage',
        desc: 'A simple static page meant to simulate a bed and breakfast that hosts many different events, as well as has rooms available for rent.',
        languages: ['HTML', 'CSS', 'Javascript'],
        link: 'https://daltoncottage.surge.sh',
        key: uuid(),
        github: 'https://github.com/caetlynvenche/assignments/tree/master/exercises/business-time-two'
    },
    {
        imgUrl: 'MarioPest',
        name: 'Mario Pest Control',
        desc: 'A fun way to practice using forms and javascript to do some math and display. Also a nice exercise in different ways to style a page.',
        languages: ['HTML', 'CSS', 'Javascript'],
        link: 'https://caetlyn-mario-pest-control.surge.sh',
        key: uuid(),
        github: 'https://github.com/caetlynvenche/assignments/tree/master/exercises/mario-pest-control'
    },
    {
        imgUrl: 'BountyHunter',
        name: 'Bounty Hunter',
        desc: 'This was my first project making my own database and then using it. Using MongoDB and Mongoose, I created and made accessable a set of information with full CRUD usability. *Heroku takes a while to start.*',
        languages: ['MongoDB', 'Mongoose', 'React', 'SCSS', 'Axios'],
        link: 'https://caetlyn-bounty-hunter.herokuapp.com/',
        key: uuid(),
        github: 'https://github.com/caetlynvenche/assignments/tree/master/servers/bounty-hunter-server'
    },
    {
        imgUrl: 'DJReact',
        name: 'DJ React',
        desc: 'To spend more time practing with React, I made a page with eight buttons and four colored squares. Each of the buttons does something different to the squares.',
        languages: ['CSS', 'React'],
        link: 'https://caetlyn-djreact.surge.sh',
        key: uuid(),
        github: 'https://github.com/caetlynvenche/assignments/tree/master/exercises/dj-react'
    },
    {
        imgUrl: 'FloraMagazine',
        name: 'Flora Magazine Spread',
        desc: 'Working with a classmate, we had split the work to make a multi-page magazine spread. I used various Adobe products as well as understanding of layouts and other creative aspects.',
        languages: ['Adobe Indesign', 'Adobe Photoshop', 'Adobe Illustrator'],
        link: 'https://drive.google.com/file/d/1YnsY70pNIzig0goLF4ggGqMjYtPmHBjw/view?usp=sharing',
        key: uuid(),
        github: null
    }
]

const Projects = () => {
    return (
        <div className="projectsPage">
            { projects.map(ind => <IndProject {...ind} />)}
        </div>
    )
}

export default Projects