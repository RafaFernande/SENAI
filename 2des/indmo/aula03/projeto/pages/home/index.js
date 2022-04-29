import React from 'react';
import {View, Text, Button} from 'react-native';

export default function Home({navigation}) {
    return(
        <View>
            <text>Tela Home</text>
            <Button
                title="Acessar Página 01"
                onPress={() =>{
                    navigation.navigate=('Page01')
                }}
            />
        </View>
    );
}