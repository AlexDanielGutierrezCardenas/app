import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 50,
    width: windowWidth * 0.9,
    alignSelf: "center",
    padding: 20,
    marginTop: 0,
    marginBottom: 50,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },

  infoText: {
    fontSize: 16,
    color: "#666",
    marginBottom: 8,
    paddingLeft: 50,
  },

  icon: {
    width: 50,
    height: 50,
    resizeMode: "contain",
    marginBottom: 15,
    paddingLeft: 200,
  },

  link: {
    color: "#000",
    textDecorationLine: "underline",
  },
});

const Map = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>CCESD - POTOSÍ</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.facebook.com/")}
      >
        <Image
          style={styles.icon}
          source={require("../database/images/logo/logo.jpg")}
        />
      </TouchableOpacity>

      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.infoText}>
            Horario de atención: 24 horas, 365 días del año
          </Text>
          <Text style={styles.infoText}>
            Ubicación: Camino a Cantumarca Esq. Ismael Montes s/n – Zona
            Bracamonte
          </Text>
          <Text style={styles.infoText}>N° Piloto gratuito: 168</Text>
          <Text style={styles.infoText}>Teléfono: 6120852</Text>
          <Text style={styles.infoText}>Línea WhatsApp: 69632676</Text>
        </View>
      </View>
    </View>
  );
};

export default Map;