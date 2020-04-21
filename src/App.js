import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Projects from './Projects'
import './styles/styles.css'

function App() {
    return (
        <div>
            <Nav />

            <Switch>
                <Route exact path="/"><Home /></Route>
                <Route path="/projects"><Projects /></Route>
            </Switch>
        </div>
    );
}

export default App;
