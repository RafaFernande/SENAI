import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import style from './style.js'

export default function Home({ navigation, route }) {
    const [lista, setLista] = useState([]);

    //const { id } = route.params;

    useEffect(() => {
        let url = "http://10.87.207.20:8080/api/equipe";

        fetch(url)
            .then((response) => { return response.json(); })
            .then(data => { setLista(data); })
    }, []);

    return (
        <ScrollView>
            <View>
                <View style={style.card}>
                    <Text style={style.txt}>Equipes:</Text>
                </View>
                {
                    lista.map((item, index) => {
                        return (
                            <TouchableOpacity style={style.box} key={index} onPress={() => { navigation.navigate("Equipe", { id: item.id }) }} >
                                <Text> {item.nomeEquipe} </Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}