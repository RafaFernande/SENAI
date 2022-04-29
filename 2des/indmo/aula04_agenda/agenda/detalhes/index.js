import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import style from "./style.js";

export default function Detalhes({navigation, route}) {
    const {Tarefa, Data, Descrição} = route.params;
    return (
        <View>
            <TouchableOpacity>
                <Text>{Tarefa}</Text>
                <Text>{Data}</Text>
                <Text>{Descrição}</Text>
            </TouchableOpacity>
        </View>
    )
}