import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
  } from "react-native";
  import React, { useState,useEffect } from "react";
  import { AntDesign } from "@expo/vector-icons";
  import { MaterialIcons } from "@expo/vector-icons";
  import { useRouter } from "expo-router";
  import axios from "axios";
  import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const login = () => {
    const [ci, setCi] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    useEffect(() => {
      const checkLoginStatus = async () => {
          try{
              const token = await AsyncStorage.getItem("authToken");
              if(token){
                  router.replace("/home")
              }
          } catch(error){
              console.log(error);
          }
      }
  
      checkLoginStatus();
    },[])
    const handleLogin = () => {
        const user = {
            ci: ci,
            password: password
        }
  
        axios.post(`http://localhost:3000/login`, user).then((response) => {
            console.log(response);
            const token = response.data.token;
            AsyncStorage.setItem("authToken",token);
            router.replace("/home")
        })
    }
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
      >
        <View>
          <Image
            style={{ width: 200, height: 200, resizeMode: "contain" }}
            source={{
              uri: "https://th.bing.com/th/id/OIP.AuWEqjoHqlPVkH1u-xS1SgHaFj?w=612&h=459&rs=1&pid=ImgDetMain",
            }}
          />
        </View>
  
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight:"900",
                
                
                color: "#041E42",
              }}
            >
              INICIA TU SECCION
            </Text>
          </View>
  
          <View style={{ marginTop: 70 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#E0E0E0",
                paddingVertical: 5,
                borderRadius: 5,
                marginTop: 10,
              }}
            >
              <MaterialIcons
                style={{ marginLeft: 8 }}
                name="email"
                size={24}
                color="gray"
              />
              <TextInput
                value={ci}
                onChangeText={(text) => setCi(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: ci ? 18 : 18,
                }}
                placeholder="introduzca su CI"
              />
            </View>
  
            <View style={{ marginTop: 10 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 5,
                  backgroundColor: "#E0E0E0",
                  paddingVertical: 5,
                  borderRadius: 5,
                  marginTop: 30,
                }}
              >
                <AntDesign
                  style={{ marginLeft: 8 }}
                  name="lock1"
                  size={24}
                  color="gray"
                />
                <TextInput
                  value={password}
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  style={{
                    color: "gray",
                    marginVertical: 10,
                    width: 300,
                    fontSize: password ? 18 : 18,
                  }}
                  placeholder="Introduzca su Contraseña"
                />
              </View>
            </View>
  
            <View
              style={{
                marginTop: 12,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text>Si tiene problemas para iniciar seccion contactese con el administrador </Text>
  
              
            </View>
  
            <View style={{ marginTop: 80 }} />
  
            <Pressable
            onPress={handleLogin}
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
                Login
              </Text>
            </Pressable>
  
            <Pressable
              onPress={() => router.replace("/register")}
              style={{ marginTop: 15 }}
            >
              <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                Don't have an account? Sign Up
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default login;
  
  const styles = StyleSheet.create({});