import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../pages/home'
import Continue from '../pages/continue'
import Questions from '../pages/questions'
import Result from '../pages/result'
import Saved from '../pages/saved'
import ResultSaved from '../pages/resultSaved'

const Stack = createNativeStackNavigator()

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
                <Stack.Screen  name="Continue" component={Continue} />
                <Stack.Screen  name="Questions" component={Questions} />
                <Stack.Screen  name="Result" component={Result} />
                <Stack.Screen  name="Saved" component={Saved} />
                <Stack.Screen  name="ResultSaved" component={ResultSaved} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;