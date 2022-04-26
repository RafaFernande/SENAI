import React, { useState } from 'react';

import {View, Text, TouchableOpacity, Image } from 'react-native';

import styles from './style.js'

export default function App(){
const [value, setValue] = useState("");

  const star = require('./assets/star.png');
  const nome = "Fulano da Silva";

  const data = [
    {
      nome: "Reenye Lanches",
      nota: 6
    },
    {
      nome: "Mingue e Aliche",
      nota: 5
    },
    {
      nome: "Tia Beth",
      nota: 4
    },
    {
      nome: "Marchesini",
      nota: 2
    }
  ];

  return(
    <View style={styles.container}>
      {/*Cria um texto e mostra o valor da constante nome*/}
      <Text style={styles.title}>{value}</Text>
  
      {  
        data.map((restaurante, index) => {
          return (
            <TouchableOpacity key={index} style = {styles.card} 
            onPress={()=>{setValue(restaurante.nome)}}>
            <Text style={styles.nomeloja}>{restaurante.nome}</Text>
            <View style={styles.nota}>
            <Text style={styles.notaloja}>{restaurante.nota}</Text>
            <Image 
            source={star}
            style={styles.star}
            ></Image>
            </View>
          </TouchableOpacity>
          );
        })
      }

    </View>
  );
}