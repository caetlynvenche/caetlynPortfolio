import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { FaArrowCircleUp } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link';
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import './styles/styles.css'

function App() {

    return (
        <div>
            <div id="top"></div>

            <Nav />

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/projects"><Projects /></Route>
            </Switch>

            <HashLink to="#top"><FaArrowCircleUp className="toTop" /></HashLink>
        </div>
    );
}

export default App;
