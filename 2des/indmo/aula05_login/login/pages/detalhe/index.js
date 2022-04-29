import React from 'react';
import { View, Text } from 'react-native';
import style from './style.js'

export default function Detalhe({ route }) {

    return (
        <View style={style.card}>
            <Text style={style.txt}>Nome:</Text>
            <Text style={style.txt}>Jogos:</Text>
            <Text style={style.txt}>Time:</Text>
            <Text style={style.txt}>Idade:</Text>
        </View>
    );
}