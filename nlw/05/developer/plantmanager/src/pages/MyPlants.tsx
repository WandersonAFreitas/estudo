import React, { useState } from 'react';
import { StyleSheet, 
        View, 
        Text, 
        Image } from 'react-native';
import { Header } from "../components/Header";
import colors from '../styles/colors';
import waterdrop from "../assets/waterdrop.png";

export function MyPlants() {
    return (
        <View style={style.container}>
            <Header />

            <View style={style.spotlight}>
                <Image
                    style={style.waterdrop} 
                    source={waterdrop}/>

                <Text style={style.waterdrop} > 
                    asfadf
                </Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingTop: 50,
        backgroundColor: colors.background
    },
    spotlight: {

    },
    waterdrop: {

    }
})