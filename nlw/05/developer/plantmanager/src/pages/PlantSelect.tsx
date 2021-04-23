import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    Text,
    StyleSheet,
    View,
} from 'react-native';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function PlantSelect() {
    return (
        <View style={styles.container}>
            <Text>Selecionar planta</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background
    }
});