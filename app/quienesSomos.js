import React from "react";
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  Platform,
} from "react-native";

import { FlashList } from "@shopify/flash-list";
import FontAwesome from "@expo/vector-icons/FontAwesome";
// import Maps from "../assets/components/screens/Maps";
import MpVideos from "../assets/components/screens/mpVideos";
// import {Platform as webPlatform} from "react-native-web";

const { width, height } = Dimensions.get("window");

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

const datas = [
  {
    id: "1",
    image: require("../assets/components/database/images/quieneSomos/img1.jpg"),
  },
  {
    id: "2",
    image: require("../assets/components/database/images/quieneSomos/img2.jpg"),
  },
  {
    id: "3",
    image: require("../assets/components/database/images/quieneSomos/img3.jpg"),
  },
  {
    id: "4",
    image: require("../assets/components/database/images/quieneSomos/img4.jpg"),
  },
  {
    id: "5",
    image: require("../assets/components/database/images/quieneSomos/img5.jpg"),
  },
  {
    id: "6",
    image: require("../assets/components/database/images/quieneSomos/img6.png"),
  },
];

const renderItem = ({ item, index }) => (
  <View
    style={{
      backgroundColor: "red",
      height: width / 2,
      width: width * 0.7,
      marginHorizontal: 10,
      borderRadius: 12,
    }}
  >
    <Image
      style={{
        height: width / 2,
        width: width * 0.7,
      }}
      source={item.image}
    />
  </View>
);

export default MyList = () => {
  const loginWithFacebook = () => {
    console.log("Button pressed");
  };

  return (
    <>
      <ScrollView>
        <FlashList
          estimatedItemSize={200}
          style={{ backgroundColor: "red" }}
          keyExtractor={(item, index) => String(index)}
          showsHorizontalScrollIndicator={true}
          data={datas}
          horizontal
          renderItem={renderItem}
        />
        <View>
          <ButtonComponent onPress={handlePress} title="Presionar" />
          <View>
            <Text>RAZÓN DE SER</Text>
            <Text>
              El CCESD es una institución dedicada a la Coordinación y
              Regulación de las Urgencias y Emergencias (Referencias y
              contrareferencias) médicas que ingresan a través de la línea
              piloto gratuita 168 las 24 horas, los 365 días del año en todo el
              Departamento de Potosí, Aplica normas de emergencia, regula
              ambulancias terrestres y sigue la Ley 1152 del SUS para atención
              médica prehospitalaria e interhospitalaria.
            </Text>
            <Text>MISIÓN</Text>
            <Text>
              El CCESD - POTOSÍ es una institución dedicada a la Coordinación y
              atención prehospitalaria, Interhospitalaria y hospitalaria
              Regulando las urgencias y emergencias médicas que ingresan a
              través de la línea piloto gratuita 168 las 24 horas , los 365 días
              del año.
            </Text>
            <Text>VISIÓN</Text>
            <Text>
              Ser una institución líder y un modelo regional de cobertura
              departamental eficiente y eficaz en la regulación de las urgencias
              y emergencias médicas, que cuenta con tecnología de punta y última
              generación en los 41 Municipios y con la infraestructura
              suficiente, que permita ofrecer servicios prehospitalarios,
              interhospitalarios (referencia, contrareferencia) de calidad que
              respondan claramente a las necesidades de los 41 municipios
            </Text>
            <Image
              style={{
                height: width / 2,
                width: width * 0.7,
              }}
              source={require("../assets/components/database/images/quieneSomos/img6.png")}
            />
          </View>
          <View
            style={{
              backgroundColor: "gray",
              marginEnd: 10,
              marginTop: 10,
              marginLeft: 10,
              marginBottom: 10,
              display: "flex",
            }}
          >
            <Text> EMERGENCIA MEDICAS</Text>
            <Text>Servicios de:</Text>

            <View style={{ backgroundColor: "green", alignItems: "center" }}>
              <View style={styles.container}>
                <MpVideos />
              </View>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Image
                  source={require("../assets/components/database/images/quieneSomos/img6.png")}
                  style={{
                    width: width / 4,
                    height: width / 4,
                    marginRight: 10,
                    borderRadius: 20,
                  }}
                />
                <Image
                  source={require("../assets/components/database/images/quieneSomos/img6.png")}
                  style={{
                    width: width / 4,
                    height: width / 4,
                    marginRight: 10,
                    borderRadius: 20,
                  }}
                />
              </View>
            </View>
          </View>
          <View style={{ backgroundColor: "red" }}>
            <Text> CCESD</Text>
            <FontAwesome.Button
              name="facebook"
              backgroundColor="#3b5998"
              width="8px"
              height="8px"
              onPress={loginWithFacebook}
            ></FontAwesome.Button>
            <Text>Contactos:</Text>
            <Text>Horarios de atención 24 horas y 365 dias del año</Text>
            <Text>
              Ubicación: Camino a Cantumarca Esq. Ismael Montes s/n – Zona
              Bracamonte
            </Text>
            <Text>Telf: 6120852</Text>
            <Text>Línea WhatssAp: 69632676</Text>
            <Text>N° Piloto gratuito: 168 </Text>
            {/* <View style={styles.container}>
              {Platform.OS === "android" &&(
                <Maps/>
              )}
              {webPlatform.Os==="web" &&(
                <Text>web</Text>
              )}
            </View> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};
const handlePress = () => {
  // Lógica que se ejecuta cuando se presiona el botón
  console.log("Botón presionado");
};
const ButtonComponent = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    width: width / 2,
    borderRadius: 5,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  redoon: {
    width: width / 4,
    height: width / 4,
    padding: 100,
    position: "relative",
    marginBottom: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    width: width,
    height: width,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    height: 350,
    width: width,
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
