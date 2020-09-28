import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../pages/Search';
import SearchResult from '../pages/SearchResult';
import SearchMusicNotFound from '../pages/SearchMusicNotFound';
import Result from '../pages/Result';
import Historic from '../pages/LatestSearches';
const { Navigator, Screen } = createStackNavigator();

function AppStack()
{
    return(
        // Navegação em pilha pelas telas
        <NavigationContainer>
            <Navigator screenOptions={{headerShown: false}}>
                <Screen name="Search" component={Search} />
                <Screen name="NotFound" component={SearchMusicNotFound} />
                <Screen name="SearchResult" component={SearchResult} />
                <Screen name="Result" component={Result} />
                <Screen name="Historic" component={Historic} />
            </Navigator>
        </NavigationContainer>
    );
}

export default AppStack