import React from "react";

import { View, Text, TouchableOpacity } from "react-native";
import style from "./style";

export default function Home({ navigation }) {
    const json = [
        {
            "Tarefa": "Alimentar o cachorro",
            "Data": "2021-12-09",
            "Descrição": "Abrir o saco de ração e colocar na tigela do cachorro"
        },
        {
            "Tarefa": "Alimentar o gato",
            "Data": "2021-12-09",
            "Descrição": "Abrir o saco de ração e colocar na tigela do gato"
        },
        {
            "Tarefa": "Alimentar o coelho",
            "Data": "2021-12-09",
            "Descrição": "Abrir o saco de ração e colocar na tigela do coelho"
        },
        {
            "Tarefa": "Alimentar o coelho",
            "Data": "2021-12-09",
            "Descrição": "Abrir o saco de ração e colocar na tigela do coelho"
        },
        {
            "Tarefa": "Alimentar o papagaio",
            "Data": "2021-12-09",
            "Descrição": "Abrir o saco de frutas e colocar na tigela do papagaio"
        },
        {
            "Tarefa": "Alimentar o chimpanzé",
            "Data": "2021-12-09",
            "Descrição": "Abrir o saco de banana e colocar na tigela do chimpanzé"
        }
    ];
    return (
        <View style={style.pag}>
            {json.map((item, index) => 
                <TouchableOpacity style ={style.card} key={index} onPress={() => {navigation.navigate("Detalhes", item)}}>
                    <Text>{item.Tarefa}</Text>
                </TouchableOpacity>
            )}
        </View>
    );
}