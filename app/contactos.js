import React from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "../assets/components/database/images/contactos/llamada.png";
import { dataEmergencia } from "./Database";
import { Ionicons } from "@expo/vector-icons";

const contactos = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <>
      <ScrollView>
        <View
          style={{
            width: width,
            backgroundColor: "#242F5B",
            alignItems: "center",
          }}
        >
          <Image source={logo}></Image>
          <View
            style={{
              borderColor: "black",
              borderWidth: "2px",
              width: width / 2,
            }}
          >
            <Text style={{ fontSize: 30 }}>
              Si te encuentras en emergencias o urgencias llama a las líneas
              gratuitas
            </Text>
          </View>

          {dataEmergencia.map((user) => (
            <View
              style={{
                // borderWidth: "2px",¨
                width: width / 2,
                marginTop: 30,
                background: "yellow",
                height: 60,
                position: "relative",
              }}
              key={user.id}
            >
              <View className="user">
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "serif",
                    fontWeight: "bold",
                    color: "black",
                    fontStyle: "normal",
                    marginTop: 5,
                    marginLeft: 10,
                  }}
                >
                  {user.name}
                </Text>
              </View>
              <View className="user">
                <Text
                  style={{
                    fontSize: 15,
                    fontFamily: "serif",
                    fontWeight: "normal",
                    color: "black",
                    fontStyle: "normal",
                    marginTop: 5,
                    marginLeft: 15,
                  }}
                >
                  Telefono: {user.telefono}
                </Text>
              </View>

              <View
                style={{
                  position: "absolute",
                  alignItems: "center",
                  marginTop: 10,
                  marginLeft: width / 2.5,
                }}
              >
                <ButtonComponent onPress={handlePress} title="Presionar" />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const ButtonComponent = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="call" color="black" size={32} />
    </TouchableOpacity>
  );
};
const handlePress = () => {
  // Lógica que se ejecuta cuando se presiona el botón
  console.log("Botón presionado");
};

export default contactos;
