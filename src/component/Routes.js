import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { View, Text } from 'react-native';
import {CreateTiket} from './Tiket';

const Routes = () => {
    return (
        <Router>
            <Scene key='root'>
                <Scene
                    key='CreateTicket'
                    component={CreateTiket}
                    title='Create Tiket'
                    initial
                />
            </Scene>
        </Router>
    )

}

export { Routes };