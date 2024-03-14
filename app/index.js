import { View,Text, TouchableOpacity, Dimensions } from "react-native";
import React, { useState } from "react";
import { COLOURS } from "./Database";

export default function Users({navigation}){
    const [product, setProduct] = useState({});
    const width = Dimensions.get("window").width;
    return(
        <View style={{
            flex:1,
            width:width,
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:COLOURS.red,
        }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('ActivityGo')}
                style={{
                    width: '90%',
                    height: '10%',
                    backgroundColor: COLOURS.green,
                    marginTop:20,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text
                        style={{
                        fontSize: 12,
                        fontWeight: '500',
                        letterSpacing: 1,
                        color: COLOURS.white,
                        textTransform: 'uppercase',
                        }}>
                        mi reservacion
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
                style={{
                    width: '90%',
                    height: '10%',
                    marginTop:20,
                    backgroundColor: COLOURS.green,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text
                        style={{
                        fontSize: 12,
                        fontWeight: '500',
                        letterSpacing: 1,
                        color: COLOURS.white,
                        textTransform: 'uppercase',
                        }}>
                        Ver mi receta medica
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => (product.isAvailable ? addToCart(product.id) : null)}
                style={{
                    width: '90%',
                    height: '10%',
                    marginTop:20,
                    backgroundColor: COLOURS.green,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Text
                        style={{
                        fontSize: 12,
                        fontWeight: '500',
                        letterSpacing: 1,
                        color: COLOURS.white,
                        textTransform: 'uppercase',
                        }}>
                        ver mis notificaciones
                    </Text>
                </TouchableOpacity>
        </View>
    )
}
    