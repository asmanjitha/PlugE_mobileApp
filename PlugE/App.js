import React from 'react';
import LoginApp from './Views/Login/Login';
import Home from "./Views/Home/Home";
import Setup from "./Views/Setup/Setup";
import UserandPass from "./Views/Username And Password Set/UserandPass"
import { Router, Scene } from 'react-native-router-flux';
import Dashboard from "./Views/Dashboard/Dashboard";
import Changepass from "./Views/Change User and Pass/Changepass";



const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="Login"
                       component={LoginApp}
                       title="Welcome"
                       initial
                />
                <Scene
                    key="Home"
                    component={Home}
                    title="Home"
                />
                <Scene
                    key="Setup"
                    component={Setup}
                    title="Setup Device"
                />
                <Scene
                    key="Dashboard"
                    component={Dashboard}
                    title="Dashboard"
                />
                <Scene
                    key="UserandPass"
                    component={UserandPass}
                    title="Set Username and Password"
                />
                <Scene
                    key="Changepass"
                    component={Changepass}
                    title="Change Username and Password"
                />
            </Scene>
        </Router>
    );
}

export default App;






