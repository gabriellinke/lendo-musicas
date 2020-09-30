import React, { useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useFocusEffect } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'

import Logo from '../../assets/logo.svg';
import SearchButton from '../../assets/search.svg';
import load from '../../assets/load.gif';

import api from '../../services/api'
import styles from './styles';

function Search()
{
    const [artist, setArtist] = useState(''); // Armazena o nome do artista
    const [song, setSong] = useState(''); // Armazena o nome da música
    const [showHistoric, setShowHistoric] = useState(false); // Mostra ou não o botão do histórico
    const [loading, setLoading] = useState(false); // Diz se está carregando ou não
    const { navigate } = useNavigation();

    useFocusEffect(() => {   // Acessa o histórico
        async function recoverHistoric()
        {
            let historic = [];
            let aux = await AsyncStorage.getItem('@musics');   // Recupera o histórico
            if(aux)
                historic = JSON.parse(aux);
            historic.length > 0 ? setShowHistoric(true) : setShowHistoric(false);
        }

        recoverHistoric();
    }, [])

    async function handleSearch()   // Consulta a letra na API
    {
        // Armazena o nome do artista e da música no async storage pra permitir recuperar nas próximas páginas
        await AsyncStorage.setItem('@artist', artist);
        await AsyncStorage.setItem('@song', song);
        if(artist !== '' && song !== '')
        {
            setLoading(true);
            api.get(`${artist}/${song}`)    //Faz a consulta a API, salva a letra, ou se der errado manda para a página de letra não encontrada
                .then(async (response) => {
                    if(response.data.lyrics !== "")
                    {
                        await AsyncStorage.setItem('@lyrics', response.data.lyrics);
                        setLoading(false);
                        navigate('SearchResult');
                    }
                    else
                    {
                        setLoading(false);
                        navigate('NotFound');
                    }
                })
                .catch(response => {
                    console.log(response);
                    navigate('NotFound');
                    setLoading(false);
                })
        }
        setArtist('');
        setSong('');
    }

    function handleHistoric()
    {
        navigate('Historic');
        setArtist('');
        setSong('');
    }

    function buttonHistoric()
    {
        if(showHistoric)
        {
            return(
                <RectButton onPress={handleHistoric}>
                    <View style={styles.historicButton}>
                        <Text style={styles.historicButtonText}>Últimas buscas</Text>
                    </View>
                </RectButton>
            );
        }
    }

    function loadAnimation()
    {
        if(loading)
            return(
                <View style={styles.loadingModal}>
                    <Image source={load} style={styles.loadingImage}/>
                </View>
            );
    }

    return(
        <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}>
            <KeyboardAvoidingView
                style={styles.container}
                keyboardVerticalOffset={-70} behavior={"position"}
            >
                <View style={styles.inner}>
                    <Logo style={styles.logo}/>
                    <Text style={styles.title}>Buscar letra</Text>

                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Artista</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Insira o nome do artista'
                            placeholderTextColor='#828282'
                            value={artist}
                            onChangeText={text => setArtist(text)}
                        />
                    </View>             
                    <View style={styles.inputBlock}>
                        <Text style={styles.label}>Música</Text>
                        <TextInput
                            style={styles.input}
                            placeholder='Insira o nome da música'
                            placeholderTextColor='#828282'
                            value={song}
                            onChangeText={text => setSong(text)}
                        />
                    </View>

                    <RectButton onPress={handleSearch} style={styles.button}>
                        <SearchButton style={styles.search}/>
                    </RectButton>

                    {buttonHistoric()}
                </View>
            </KeyboardAvoidingView>
            {loadAnimation()}
        </LinearGradient>
    );
}

export default Search;