import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from '../pages/Landing';
import Menu from '../pages/Menu';

const { Navigator, Screen } = createStackNavigator();

function AppStack () {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Landing" component={Landing}/>  
                <Screen name="Menu" component={Menu}/>         
            </Navigator>
        </NavigationContainer>
    )

}

export default AppStack;