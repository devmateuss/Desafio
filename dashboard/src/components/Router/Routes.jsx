import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import MainContent from '../Main/MainContent'
import RegisterMoviment from '../RegisterMoviment/RegisterMoviment'
import RegisterAgents from '../RegisterAgents/RegisterAgents'

const Routes = () => {
    return (
        <Switch >
            <Route exact path="/" component={MainContent} />
            <Route path="/moviments" component={RegisterMoviment} />
            <Route path="/agents" component={RegisterAgents} />
            <Redirect from="*" to="/"/>
        </Switch>
    )

}

export default Routes