import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/Search';
import SearchMusicNotFound from '../pages/SearchMusicNotFound';
const { Navigator, Screen } = createStackNavigator();

function AppStack()
{
    return(
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Search" component={Search} />
                <Screen name="NotFound" component={SearchMusicNotFound} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack