// import React from "react";
// import {
//   Dimensions,
//   Image,
//   ScrollView,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import logo from "../../assets/components/database/images/contactos/llamada.png";
// import { dataEmergencia } from "./Database";
// import { Ionicons } from "@expo/vector-icons";

// const windowWidth = Dimensions.get("window");
// const contactos = () => {
//   return (
//     <>
//       <ScrollView style={{ width: windowWidth }}>
//         <View
//           style={{
//             width: windowWidth,
//             height: windowWidth,
//             backgroundColor: "red",
//             alignItems: "center",
//           }}
//         >
//           <Image source={logo}></Image>
//           <View
//             style={{
//               borderColor: "black",
//               borderWidth: "2px",
//               width: windowWidth,
//             }}
//           >
//             <Text style={{ fontSize: 30 }}>
//               Si te encuentras en emergencias o urgencias llama a las líneas
//               gratuitas
//             </Text>
//           </View>
//         </View>
//         <View style={{ width: windowWidth, background: "blue" ,flex:1}}>
//           {dataEmergencia.map((user) => (
//             <View
//               style={{
//                 width: windowWidth,
//                 flexDirection: "row",
//                 marginBottom: 10,
//                 marginTop:20,
//               }}
//               key={user.id}
//             >
//               <View
//                 style={{
//                   width:"32%",
//                   height:100,
//                   backgroundColor: "skyblue",
//                   marginHorizontal: 10,
//                   alignItems: "center",
//                   justifyContent: "center",
//                   borderRadius: 50,
//                 }}
//               >
//                 <Text
//                   style={{
//                     // fontSize: 15,
//                     // fontFamily: "serif",
//                     // fontWeight: "bold",
//                     // color: "black",
//                     // fontStyle: "normal",
//                     // marginTop: 5,
//                     // marginLeft: 10,
//                     // backgroundColor: "skyblue",
//                   }}
//                 >
//                   {user.name}
//                   Telefono: {user.telefono}
//                 </Text>
//               </View>

//               {/* <View
//                 style={{
//                   position: "absolute",
//                   alignItems: "center",
//                   marginTop: 10,
//                   marginLeft: windowWidth / 2.5,
//                 }}
//               >
//                 <ButtonComponent onPress={handlePress} title="Presionar" />
//               </View> */}
//             </View>
//           ))}
//         </View>
//       </ScrollView>
//     </>
//   );
// };

// const ButtonComponent = ({ onPress, title }) => {
//   return (
//     <TouchableOpacity onPress={onPress}>
//       <Ionicons name="call" color="black" size={32} />
//     </TouchableOpacity>
//   );
// };
// const handlePress = () => {
//   // Lógica que se ejecuta cuando se presiona el botón
//   console.log("Botón presionado");
// };

// export default contactos;

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  useWindowDimensions,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import logo from "../../assets/components/database/images/contactos/llamada.png";
import { dataEmergencia } from "./Database";

export default function App() {
  const window = useWindowDimensions();

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#242F5B",
      paddingTop: window.width > 768 ? 0 : 0,
    },

    contentContainer: {
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: window.width > 768 ? "10%" : "5%",
      paddingTop: window.width > 768 ? 25 : 0,
    },

    button: {
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: "#D3D3D3",
      padding: 10,
      borderRadius: 20,
      marginTop: 2,
      marginVertical: 15,
      marginHorizontal: 20,
    },

    buttonText: {
      color: "black",
      marginLeft: 10,
      marginEnd: 10,
      fontWeight: "bold",
    },

    image: {
      width: "10",
      height: "5",
    },

    titles: {
      fontSize: Dimensions.get("window").width > 780 ? 50 : 25,
      fontWeight: "bold",
      color: "#FF0000",
      textShadowColor: "white",
      textAlign: "center",
      textShadowOffset: {
        width: 1,
        height: 1,
      },
      textShadowRadius: 10,
      padding: 6,
    },

    title: {
      fontSize: 40,
      fontWeight: "bold",
      color: "#FF0000",
      textShadowColor: "white",
      textAlign: "center",
      textShadowOffset: {
        width: 1,
        height: 1,
      },
      textShadowRadius: 10,
      padding: 6,
    },

    subTitle: {
      fontSize: 26,
      fontWeight: "bold",
      color: "white",
    },

    videoContainer: {
      width: Dimensions.get("window").width > 780 ? 500 : "100%",
      height: 500,
    },
  });

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.titles}>NUMEROS DE EMERGENCIAS</Text>
      <Image
        style={{
          width: Dimensions.get("window").width > 800 ? 400 : "100%",
          height: 300,
        }}
        source={logo}
      />
      {dataEmergencia.map((user) => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => Linking.openURL(`tel:{${user.telefono}}`)}
        >
          <MaterialIcons name="phone" size={24} color="red" />
          <Text style={styles.buttonText}>
            LLamar a: {user.name}
          </Text>
        </TouchableOpacity>
      ))}
      <StatusBar style="auto" />
    </ScrollView>
  );
}
