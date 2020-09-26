import React, { useState, useEffect } from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage'

import BackButton from '../../assets/goBack.svg';
import Logo from '../../assets/logo2.svg';
import NewSearch from '../../assets/newSearch2.svg';

import styles from './styles';

function Search()
{
    const [artist, setArtist] = useState(''); // Armazena o nome do artista
    const [song, setSong] = useState(''); // Armazena o nome da música
    const [lyric, setLyric] = useState('');
    const { navigate, goBack } = useNavigation();

    useEffect(() => {  // Recupera os dados do async storage / Salva a nova música no histórico
        async function recoverDataAndSave()
        {
            const storagedArtist = await AsyncStorage.getItem('@artist')
            const storagedSong = await AsyncStorage.getItem('@song')
            const storagedLyric = await AsyncStorage.getItem('@lyrics')
            setArtist(storagedArtist);
            setSong(storagedSong);
            setLyric(storagedLyric);

            // Salva os dados no histórico
            if(storagedArtist !== "" && storagedSong !== "" )
            {
                let musics = [];
                    let historic = await AsyncStorage.getItem('@musics');   // Recupera o histórico
                    if(historic)
                        musics = JSON.parse(historic);

                    if(musics.length > 0)   // Verifica se a música já está no histórico
                        for(let music of musics)
                        {
                            if(storagedArtist === music.artist && storagedSong === music.song)
                                return;
                        }
    
                    /* Adiciona um novo valor no array criado */
                    musics.push({artist: storagedArtist, song: storagedSong});
                    if(musics.length > 10)  // Se tiver mais de 10 itens no histórico remove o mais antigo
                        musics.shift();
    
                    // /* Salva o item */
                    await AsyncStorage.setItem("@musics", JSON.stringify(musics))
            }
        }

        recoverDataAndSave();
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
                <Logo style={styles.logo}/>
            </BorderlessButton>
            <BorderlessButton onPress={handleNavigateBack}>
                <BackButton style={styles.back}/>
            </BorderlessButton>

            <View style={styles.text}>
                <Text style={styles.song}>{song}</Text>
                <Text style={styles.artist}>CANÇÃO DE {artist.toUpperCase()}</Text>
                <Text style={styles.lyric}>{lyric}</Text>
                <Text style={styles.more}>Curtiu? Busque mais letras.</Text>
            </View>

            <RectButton onPress={handleSearch} style={styles.button}>
                <NewSearch style={styles.search}/>
            </RectButton>
        </ScrollView>
    );
}

export default Search;