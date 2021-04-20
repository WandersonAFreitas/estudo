import React, { useState } from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import wateringImg from '../assets/watering.png';


export function Welcome() {
    const [visible, setVisible] = useState(false);

    function handleVisibility(){
        setVisible(!visible)
    }
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácil
            </Text>

            {
                visible &&
                <Image source={wateringImg} style={style.image}/>
            }

            <Text style={style.subtitle}>
                Não esqueça mais de regar suas plantas. 
                Nós cuidamos de lembrar você sempre que precisar.
            </Text>

            <Button 
                title="Avançar"
                onPress={handleVisibility} 
                />
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        marginTop: 38
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 18,
        paddingHorizontal: 28,
        color: colors.heading
    },
    image: {
        width: 292,
        height: 284
    }
});