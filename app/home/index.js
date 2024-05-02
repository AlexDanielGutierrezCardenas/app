import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import { COLOURS } from "./Database";
import { useRouter } from "expo-router";

export default function Users({ navigation }) {
  const router = useRouter();
  const [product, setProduct] = useState({});
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://10.10.90.100:8081/datos');
        setDatos(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  const width = Dimensions.get("window").width;
  const register = () => {
    router.replace("/(authenticaded)/register");
  };
  const logout = () => {
    clearAuthToken();
  };
  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("auth token cleared");
    router.replace("/(authenticate)/login");
  };
  return (
    <View
      style={{
        flex: 1,
        width: width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLOURS.red,
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("ActivityGo")}
        style={{
          width: "90%",
          height: "10%",
          backgroundColor: COLOURS.green,
          marginTop: 20,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            letterSpacing: 1,
            color: COLOURS.white,
            textTransform: "uppercase",
          }}
        >
          mi reservacion
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
        style={{
          width: "90%",
          height: "10%",
          marginTop: 20,
          backgroundColor: COLOURS.green,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            letterSpacing: 1,
            color: COLOURS.white,
            textTransform: "uppercase",
          }}
        >
          Ver horarios disponibles
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
        style={{
          width: "90%",
          height: "10%",
          marginTop: 20,
          backgroundColor: COLOURS.green,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            letterSpacing: 1,
            color: COLOURS.white,
            textTransform: "uppercase",
          }}
        >
          ver mis notificaciones
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={register}
        style={{
          width: "90%",
          height: "10%",
          marginTop: 20,
          backgroundColor: COLOURS.green,
          borderRadius: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "500",
            letterSpacing: 1,
            color: COLOURS.white,
            textTransform: "uppercase",
          }}
        >
          añadir nuevo Usuario
        </Text>
      </TouchableOpacity>
      <View>
      <Text>Datos de MongoDB:</Text>
      {datos.map(dato => (
        <Text key={dato._id}>{dato.ci}</Text>
      ))}
    </View>
    </View>
  );
}
