import React from 'react';
import { Text, Image, TextInput,  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import notFound from '../../assets/notFound.png';
import logo from '../../assets/logo.png';
import newSearch from '../../assets/newSearch.png';

import styles from './styles';

function Search()
{
    const { navigate } = useNavigation();
    function handleSearch() // Volta para a página inicial
    {
        navigate('Search');
    }

    return(
        <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}>
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.title}>Letra não encontrada</Text>

            <Image source={notFound} style={styles.notFoundImage}/>

            <Text style={styles.mainText}>
                Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca &lt;3
            </Text>

            <RectButton onPress={handleSearch} style={styles.button}>
                <Image source={newSearch} style={styles.search}/>
            </RectButton>
        </LinearGradient>
    );
}

export default Search;