import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage'

import logo from '../../assets/logo.png';
import newSearch from '../../assets/newSearch.png';

import styles from './styles';

function Search()
{
    const { navigate, goBack } = useNavigation();
    const [musics, setMusics] = useState([]);

    useEffect(() => {
        async function recoverHistoric()
        {
            let historic = [];
            let aux = await AsyncStorage.getItem('@musics');   // Recupera o histórico
            if(aux)
                historic = JSON.parse(aux);
            setMusics(historic);
        }

        recoverHistoric();
    }, [])

    function handleBack()   
    {
       goBack();
    }

    async function clearHistoric()   // Limpa o histórico
    {
        await AsyncStorage.setItem("@musics", '[]');
        navigate('Search');
    }

    function show()
    {
        if(musics.length > 0)
            return musics.reverse().map((music, indice) => {
                return(
                    <View style={styles.music} key={indice}>
                        <Text style={styles.artist}>{music.artist}</Text>
                        <Text style={styles.song}>{music.song}</Text>
                    </View>
                );
            })
        else
            return (<Text style={styles.message}>Nenhuma música foi encontrada em seu histórico recente.</Text>)
    }

    return(
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1
        }}>
            <LinearGradient colors={['#023047', '#000000']} style={styles.linearGradient}>
                <Image source={logo} style={styles.logo}/>
                <Text style={styles.title}>Últimas buscas</Text>

                {show()}

                <RectButton onPress={clearHistoric}>
                    <View style={styles.clearButton}>
                        <Text style={styles.clearButtonText}>Limpar histórico</Text>
                    </View>
                </RectButton>

                <RectButton onPress={handleBack} style={styles.button}>
                    <Image source={newSearch} style={styles.search}/>
                </RectButton>
            </LinearGradient>
        </ScrollView>
    );
}

export default Search;