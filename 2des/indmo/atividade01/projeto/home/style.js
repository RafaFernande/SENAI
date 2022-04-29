import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    pag:{
        alignItems: 'center',
        backgroundColor: "white",
        flex: 1
    },
    img:{
        width:800,
        height:200
    },
    cards:{
        textAlign: 'center',
        borderWidth:1,
        borderColor:'#ccc',
        margin: 5,
        padding: 5,
    },
    title:{
        fontSize: 30,
        fontFamily: 'bold',
    }
});