import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={{padding:10, height:250, alignItems:"center"}}>
            <Image style={{padding:20, width:200, height:200}} source={require('../components/database/images/logo/logo.jpg')}/>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable style={{padding:20}}>
            <Text>logout</Text>
      </Pressable>
    </View>
  );
};

export default CustomDrawerContent;
