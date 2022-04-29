import React from "react";
import { View, Text, Image} from "react-native";
import style from './style.js'

export default function Detalhes({ navigation, route }) {
    const { Nome, Descrição, Imagem, Contrução } = route.params;
    return (
        <View style={style.pag}>
                <Text>{Nome}</Text>
                <Text>{Contrução}</Text>
                <Image source={{ uri: Imagem }} style={style.img}></Image>
                <Text>{Descrição}</Text>
        </View>
    )

}