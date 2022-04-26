import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import style from './style.js';
import json from '../assets/json.json';

export default function Home({ navigation }) {
    return (
        <View style={style.pag}>
            <Text style={style.title}>As construções mais antigas conhecidas pelo homem</Text>
            {json.map((item, index) =>
                <TouchableOpacity style={style.cards} key={index} onPress={() => { navigation.navigate("Detalhes", item) }}>
                    <Text>{item.Nome}</Text>
                    <Image source={{ uri: item.Imagem }} style={style.img}></Image>
                </TouchableOpacity>
            )}
        </View>
    );
}