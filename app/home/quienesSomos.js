import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Linking, useWindowDimensions, ScrollView, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MpVideos from "../../assets/components/screens/mpVideos";
import AppCarousel from '../../assets/components/screens/appCarrousel';
import Info from '../../assets/components/screens/info';
import Mapa from '../../assets/components/screens/map';

export default function App() {
    const window = useWindowDimensions();

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#242F5B',
            paddingTop: window.width > 768 ? 0 : 0,
        },

        contentContainer: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '100%',
            paddingHorizontal: window.width > 768 ? '10%' : '5%',
            paddingTop: window.width > 768 ? 25 : 0,
        },

        button: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#D3D3D3',
            padding: 10,
            borderRadius: 20,
            marginTop: 2,
            marginVertical: 15,
            marginHorizontal: 20,
        },

        buttonText: {
            color: 'black',
            marginLeft: 10,
            marginEnd: 10,
            fontWeight: 'bold',
        },

        image: {
            width: '10',
            height: '5',
            
          },

          titles: {
            fontSize: Dimensions.get('window').width > 780 ? 50 : 25,
            fontWeight: 'bold',
            color: '#FF0000',
            textShadowColor: 'white',
            textAlign: 'center',
            textShadowOffset: {
                width: 1,
                height: 1,
              },
            textShadowRadius: 10,
            padding: 6,
          },

          title: {
            fontSize: 40,
            fontWeight: 'bold',
            color: '#FF0000',
            textShadowColor: 'white',
            textAlign: 'center',
            textShadowOffset: {
              width: 1,
              height: 1,
            },
            textShadowRadius: 10,
            padding: 6,
          },

          subTitle: {
            fontSize: 26,
            fontWeight: 'bold',
            color: 'white', 
          },

          videoContainer: {
            width: Dimensions.get('window').width > 780 ? 500 : '100%', 
            height: 500, 
          },
          
    });

    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <Text style={styles.titles}>CENTRO COORDINADOR DE EMERGENCIAS EN SALUD DEPARTAMENTAL POTOSÍ</Text>
            <AppCarousel />

            <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(`tel:168`)}>
                <MaterialIcons name="phone" size={24} color="red" />
                <Text style={styles.buttonText}>LLamar al Centro Coordinador de Emergencias en Salud Departamental</Text>
            </TouchableOpacity>

            <Info />

            <Text style={styles.title}>EMERGENCIA MÉDICA</Text>
            <Text style={styles.subTitle}>Nuestros Servicios:</Text>
                <View style={styles.videoContainer}>
                    <MpVideos />
                </View>
            
            <Mapa />

            <StatusBar style="auto" /> 
        </ScrollView>
    );
}
