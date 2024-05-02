import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
} from "react-native";
// import Maps from "../../assets/components/screens/Maps";

const windowWidth = Dimensions.get("window"); 
const windowHeigth = Dimensions.get("window");
const information = () => {
  // const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      {/* Primera fila */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.text}>Ver Primer Nivel</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>Ver Segundo Nivel</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>Ver Tercer Nivel</Text>
        </View>
      </View>
      {/* Segunda fila */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.text}>Ver Farmacias</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>inf. examen Complementario</Text>
        </View>
      </View>
      {/*mapa*/}
      {/* <Maps/> */}
      {/* cuarta fila */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.text}>INFORMACION DE HOSPITALES</Text>
        </View>
        <View style={styles.cell}>
          <Text style={styles.text}>INFORMACION DE FARMACIAS</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    height:windowHeigth,
    height:"30%",
    // justifyContent: 'center',
    // alignItems: 'center',
    
  },
  row: {
    width: windowWidth,
    height:windowHeigth,
    flexDirection: "row",
    marginBottom: 10,
    marginTop:20,
  },
  cell: {
    width:"32%",
    height:100,
    backgroundColor: "skyblue",
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  text: {
    fontWeight: "800",
    fontSize: 30,
  },
});

export default information;
