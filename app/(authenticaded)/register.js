import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { FloatingLabelInput } from "react-native-floating-label-input";
import axios from "axios";

const register = () => {
  //registro
  const [name, setName] = useState("");
  const [ci, setCi] = useState("");
  const [edad, setEdad] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [password, setPassword] = useState("");
  //final
  const router = useRouter();
  const [cont, setCont] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);

  const handleRegister = () => {
    console.log("hello");
    const user = {
      name: name,
      ci: ci,
      edad: edad,
      telefono: telefono,
      direccion: direccion,
      sintomas: sintomas,
      password: password,
    };

    axios
      .post("http://localhost:3000/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "You have been registered successfully"
        );
        setName("");
        setCi("");
        setEdad("");
        setTelefono("");
        setDireccion("");
        setSintomas("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration failed",
          "An error occurred while registering"
        );
        console.log("registration failed", error);
      });
  };
  
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View>
        <Image
          style={{ width: 20, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://th.bing.com/th/id/OIP.I2-3sOjkX1TPyd38z4SxegHaFu?rs=1&pid=ImgDetMain",
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
              marginTop: 12,
              color: "#041E42",
            }}
          >
            Registrar a un nuevo usuario
          </Text>
        </View>

        <View style={{ marginTop: 10}}>
          <FloatingLabelInput
            inputStyles={{
              // color: 'blue',
              paddingVertical: 10,
            }}
            contentContainerStyle={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'stretch',
              margin: 30,
            }}
            label={"Nombre Completo"}
            value={name}
            onChangeText={(text) => {setName(text);}}
          />
          <FloatingLabelInput
          inputStyles={{
            // color: 'blue',
            paddingVertical: 10,
          }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            margin: 30,
          }}
           
            label={"CI"}
            value={ci}
            onChangeText={(text) => {setCi(text);}}
          />
          <FloatingLabelInput
          inputStyles={{
            // color: 'blue',
            paddingVertical: 10,
          }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            margin: 30,
          }}
            style={{ marginTop:60}}
            label={"Edad"}
            value={edad}
            onChangeText={(text) => {setEdad(text);}}
          />
          <FloatingLabelInput
          inputStyles={{
            // color: 'blue',
            paddingVertical: 10,
          }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            margin: 30,
          }}
            label={"Telefono"}
            value={telefono}
            onChangeText={(text) => {setTelefono(text);}}
          />
          <FloatingLabelInput
          inputStyles={{
            // color: 'blue',
            paddingVertical: 15,
          }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            margin: 30,
          }}
            label={"Direccion"}
            value={direccion}
            onChangeText={(text) => {setDireccion(text);}}
          />
          <FloatingLabelInput
          inputStyles={{
            // color: 'blue',
            paddingVertical: 10,
          }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            margin: 30,
          }}
            label={"Sintomas"}
            value={sintomas}
            onChangeText={(text) => {setSintomas(text);}}
          />
          <FloatingLabelInput
          inputStyles={{
            // color: 'blue',
            paddingVertical: 10,
          }}
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'stretch',
            margin: 30,
          }}
            label={"Contraseña"}
            isPassword
            togglePassword={show}
            value={password}
            onChangeText={(text) => {setPassword(text);}}
            customShowPasswordComponent={<Text>Show</Text>}
            customHidePasswordComponent={<Text>Hide</Text>}
          />

          <View
            style={{
              marginTop: 12,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text>Si no logra iniciar session porfavor con el admin</Text>
          </View>

          <View style={{ marginTop: 80 }} />

          <Pressable
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "#0072b1",
              borderRadius: 6,
              marginLeft: "auto",
              marginRight: "auto",
              padding: 15,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Register
            </Text>
          </Pressable>

          <Pressable
            onPress={() => router.replace("/login")}
            style={{ marginTop: 15 }}
          >
            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
              Volver
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
});
