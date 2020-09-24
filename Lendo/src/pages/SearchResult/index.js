import React, { useEffect, useState } from 'react';
import { Text, Image, ImageBackground, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'

import imagemTeste from '../../assets/imagemTeste.png';
import logo from '../../assets/logo.png';
import newSearch from '../../assets/newSearch.png';

import styles from './styles';

function Search()
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
            <Image source={logo} style={styles.logo}/>
            <Text style={styles.title}>Letra encontrada</Text>

            <RectButton onPress={handleGoToResult}>
                <ImageBackground source={imagemTeste} style={styles.musicImage}>
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
                <Image source={newSearch} style={styles.search}/>
            </RectButton>
        </LinearGradient>
    );
}

export default Search;