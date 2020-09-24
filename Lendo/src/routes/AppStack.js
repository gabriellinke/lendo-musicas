import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/Search'

const { Navigator, Screen } = createStackNavigator();

function AppStack()
{
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Search" component={Search} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack