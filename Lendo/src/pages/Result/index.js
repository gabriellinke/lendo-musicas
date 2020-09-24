import React from 'react';
import { Text, Image, View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import backButton from '../../assets/goBack.png';
import logo from '../../assets/logo2.png';
import newSearch from '../../assets/newSearch2.png';

import styles from './styles';

function Search()
{
    const { navigate, goBack } = useNavigation();
    function handleSearch() // Volta para a página inicial
    {
        navigate('Search');
    }
    
    function handleNavigateBack()
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
                <Text style={styles.song}>O bêbado e a equilibrista</Text>
                <Text style={styles.artist}>CANÇÃO DE ELIS REGINA</Text>
                <Text style={styles.lyric}>
{`Caía a tarde feito um viaduto
E um bêbado trajando luto me lembrou Carlitos
A lua, tal qual a dona de um bordel
Pedia a cada estrela fria um brilho de aluguel
E nuvens lá no mata-borrão do céu
Chupavam manchas torturadas
Que sufoco
Louco
O bêbado com chapéu-coco
Fazia irreverências mil
Pra noite do Brasil
Meu Brasil
Que sonha com a volta do irmão do Henfil
Com tanta gente que partiu
Num rabo de foguete
Chora
A nossa Pátria mãe gentil
Choram Marias e Clarisses
No solo do Brasil
Mas sei que uma dor assim pungente
Não há de ser inutilmente
A esperança
Dança na corda bamba de sombrinha
E em cada passo dessa linha
Pode se machucar
Azar
A esperança equilibrista
Sabe que o show de todo artista
Tem que continuar`}
                </Text>
                <Text style={styles.more}>Curtiu? Busque mais letras.</Text>
            </View>

            <RectButton onPress={handleSearch} style={styles.button}>
                <Image source={newSearch} style={styles.search}/>
            </RectButton>
        </ScrollView>
    );
}

export default Search;