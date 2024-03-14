import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Image } from 'react-native';
import img from '../assets/components/database/images/contactos/llamada.png'
import CustomDrawerContent from '../assets/components/customDrawerContent';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign ,FontAwesome } from '@expo/vector-icons';
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1}}>
      
      <Drawer drawerContent={CustomDrawerContent}>
      <Image style={{width:50,height:50}} source={require("../assets/components/database/images/quieneSomos/img4.jpg")}/>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Usuario',
            title: 'Usuario',
            drawerIcon: ({color, size}) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="quienesSomos" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Quienes Somos',
            title: 'Quienes Somos ',
            drawerIcon:({size, color})=>(
              <FontAwesome name="users" size={size} color={color} />
            )
          }}
        />
        <Drawer.Screen
          name="contactos" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Contactos',
            title: 'Contactos de Lineas de Emergencias',
            drawerIcon:({size, color})=>(
              <AntDesign name="contacts" size={size} color={color} />
            )
          }}
        />
      
      </Drawer>
    </GestureHandlerRootView>
  );
}
