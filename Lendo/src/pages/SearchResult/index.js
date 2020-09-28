import React, { useEffect, useState } from 'react';
import { Text, Image, ImageBackground, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'

import imagemMusica from '../../assets/musica.jpg';
import Logo from '../../assets/logo.svg';
import NewSearch from '../../assets/newSearch.svg';

import styles from './styles';

function SearchResult()
{
    const [artist, setArtist] = useState(''); // Armazena o nome do artista
    const [song, setSong] = useState(''); // Armazena o nome da música
    const { navigate } = useNavigation();

    useEffect(() => { // Recupera os dados de artista e música do async storage
        async function recoverData()
        {
            const storagedArtist = await AsyncStorage.getItem('@artist')
            const storagedSong = await AsyncStorage.getItem('@song')
            setArtist(storagedArtist);
            setSong(storagedSong);
        }

        recoverData();
    }, [])

    function handleSearch() // Volta para a página inicial
    {
        navigate('Search');
    }

    function handleGoToResult() // Vai para a página com a letra da música
    {
        navigate('Result');
    }

    return(
        <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}>
            <Logo style={styles.logo}/>
            <Text style={styles.title}>Letra encontrada</Text>

            <RectButton onPress={handleGoToResult}>
                <ImageBackground source={imagemMusica} style={styles.musicImage}>
                    <View style={styles.opacity}>
                        <View style={styles.music}>
                            <Text style={styles.artist}>{artist}</Text>
                            <Text style={styles.song}>{song}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </RectButton>

            <Text style={styles.mainText}>
                Não encontrou o que {`\n`} procurava?
            </Text>

            <RectButton onPress={handleSearch} style={styles.button}>
                <NewSearch style={styles.search}/>
            </RectButton>
        </LinearGradient>
    );
}

export default SearchResult;