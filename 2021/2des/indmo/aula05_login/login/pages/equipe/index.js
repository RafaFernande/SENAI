import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import style from './style.js'

export default function Equipe({ navigation, route }) {
    const [equipe, setEquipe] = useState({
        "nomeEquipe": "",
        "jogadores": [
            {
                "posicao": "",
                "nome": ""
            },
            {
                "posicao": "",
                "nome": ""
            },
            {
                "posicao": "",
                "nome": ""
            },
            {
                "posicao": "",
                "nome": ""
            },
            {
                "posicao": "",
                "nome": ""
            }
        ],
        "nomeCoach": ""
    });

    const { id } = route.params;

    useEffect(() => {
        let url = "http://10.87.207.20:8080/api/equipe/" + id;

        fetch(url)
            .then(resp => { return resp.json(); })
            .then(data => { setEquipe(data); })
    }, []);

    return (
        <View>
            <View style={style.top}>
                <Text style={style.txt}>Equipe: {equipe.nomeEquipe}</Text>
                <Text style={style.txt}>Treinador: {equipe.nomeCoach}</Text>
            </View>

            <View style={style.indice}>
                <Text style={style.txt}>Jogador:</Text>
                <Text style={style.txt}>Posição:</Text>
            </View>
            {
                equipe.jogadores.map((item, index) => {
                    return (
                        <TouchableOpacity style={style.box} key={index} onPress={() => {navigation.navigate("Detalhe")}}>
                            <Text>{item.nome} </Text>
                            <Text>{item.posicao} </Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );
}