import { StyleSheet } from "react-native";

var padding = "10px";

export default StyleSheet.create(
    {
      container: {
        flex: 1,
        backgroundColor: '#c542F5',
        alignItems: 'center',
        justifyContent: 'center'
      },
      title: {
        fontSize: '1.rem',
        color: '#f5d142',
        fontWeight: 'bold'
      },
      card: {
          backgroundColor: "#919191",
          width: '90%',
          height: '8%',
          marginTop: '2%',
          borderRadius: '10px',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: padding,
          paddingRight: padding
      },
      nomeloja: {
          color: '#FFF',
          fontWeight: 'bold',
          fontSize: '1.1rem'
      },
      notaloja: {
        color: '#FFF',
          fontWeight: 'bold',
          fontSize: '1.1rem'
      },
      star: {
          width: '20px',
          height: '20px',
          marginLeft: '5px'
      },
      nota: {
          flexDirection: "row"
      }
    }
  );