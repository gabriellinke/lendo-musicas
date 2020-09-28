import React from 'react';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import NotFound from '../../assets/notFound.svg';
import Logo from '../../assets/logo.svg';
import NewSearch from '../../assets/newSearch.svg';

import styles from './styles';

function SearchMusicNotFound()
{
    const { navigate } = useNavigation();
    function handleSearch() // Volta para a página inicial
    {
        navigate('Search');
    }

    return(
        <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}>
            <Logo style={styles.logo}/>
            <Text style={styles.title}>Letra não encontrada</Text>

            <NotFound style={styles.notFoundImage}/>

            <Text style={styles.mainText}>
                Essa música ainda não foi escrita, mas não fique triste, você pode acessar milhares de músicas realizando uma nova busca &lt;3
            </Text>

            <RectButton onPress={handleSearch} style={styles.button}>
                <NewSearch style={styles.search}/>
            </RectButton>
        </LinearGradient>
    );
}

export default SearchMusicNotFound;