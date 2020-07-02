import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../home/home';
import Games from '../games/games'; 
import Tag from '../tag/tag';
import Login from '../login/login';

class RouthFile extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {       

        return (
            <Switch>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route path="/games">
                    <Games />
                </Route>
                <Route path="/tag">
                    <Tag />
                </Route>
            </Switch>
        );
    }
}

export default RouthFile;