import React from 'react';
import { Text, Image, ImageBackground, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import imagemTeste from '../../assets/imagemTeste.png';
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
            <Text style={styles.title}>Letra encontrada</Text>

            <ImageBackground source={imagemTeste} style={styles.musicImage}>
                <View style={styles.opacity}>
                    <View style={styles.music}>
                        <Text style={styles.artist}>Elis Regina</Text>
                        <Text style={styles.song}>O bêbado e o equilibrista</Text>
                    </View>
                </View>
            </ImageBackground>

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