import React, { useState, useEffect } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

import backButton from '../../assets/goBack.png';
import logo from '../../assets/logo2.png';
import newSearch from '../../assets/newSearch2.png';

import styles from './styles';

function Search()
{
    const [artist, setArtist] = useState(''); // Armazena o nome do artista
    const [song, setSong] = useState(''); // Armazena o nome da música
    const [lyric, setLyric] = useState('');
    const { navigate, goBack } = useNavigation();

    useEffect(() => {  // Recupera os dados do async storage
        async function recoverData()
        {
            const storagedArtist = await AsyncStorage.getItem('@artist')
            const storagedSong = await AsyncStorage.getItem('@song')
            const storagedLyric = await AsyncStorage.getItem('@lyrics')
            setArtist(storagedArtist);
            setSong(storagedSong);
            setLyric(storagedLyric);
        }

        recoverData();
    }, [])

    function handleSearch() // Volta para a página inicial
    {
        navigate('Search');
    }
    
    function handleNavigateBack() // Volta para a página de informações da música
    {
        goBack();
    }

    return(
        <ScrollView
            contentContainerStyle={{
                paddingHorizontal: 43,
                paddingBottom: 40,
                backgroundColor: '#FFFFFF',
                flexGrow: 1,
        }}>
            <BorderlessButton onPress={handleSearch}>
                <Image source={logo} style={styles.logo}/>
            </BorderlessButton>
            <BorderlessButton onPress={handleNavigateBack}>
                <Image source={backButton} style={styles.back}/>
            </BorderlessButton>

            <View style={styles.text}>
                <Text style={styles.song}>{song}</Text>
                <Text style={styles.artist}>CANÇÃO DE {artist.toUpperCase()}</Text>
                <Text style={styles.lyric}>{lyric}</Text>
                <Text style={styles.more}>Curtiu? Busque mais letras.</Text>
            </View>

            <RectButton onPress={handleSearch} style={styles.button}>
                <Image source={newSearch} style={styles.search}/>
            </RectButton>
        </ScrollView>
    );
}

export default Search;