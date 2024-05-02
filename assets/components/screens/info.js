import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default class Info extends Component {
  render() {
    return (
        
        <View style={styles.container}>

        <   View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardTitle}>RAZÓN DE SER</Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardText}>
                        Es una institución dedicada a la Coordinación y Regulación de las Urgencias y Emergencias
                        (Referencias y contrareferencias) médicas que ingresan a través de la línea piloto gratuita 
                        168 las 24 horas del días los 365 días del año en todo el Departamento de Potosí, aplicando 
                        Normas de Caracterización de Emergencias en Salud, de Ambulancias Terrestres, de Referencia 
                        y Contrareferencia y Reglamentos de la Ley 1152 del SUS y Atención medica prehospitalaria e 
                        Interhospitalaria.
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}> <MaterialCommunityIcons name="check" size={24} color="red" /> MISIÓN</Text>
            </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardText}>
                        El Centro Coordinador de emergencias en salud Departamental - POTOSÍ es una institución dedicada 
                        a la Coordinación y atención prehospitalaria, Interhospitalaria y hospitalaria Regulando las 
                        urgencias y emergencias médicas que ingresan a través de la línea piloto gratuita 168 las 24 
                        horas del días los 365 días del año.
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}> <MaterialCommunityIcons name="check" size={24} color="red" /> VISIÓN</Text>
            </View>
                <View style={styles.cardBody}>
                    <Text style={styles.cardText}>
                        Ser una institución líder y un modelo regional de cobertura departamental eficiente y eficaz 
                        en la regulación de las urgencias y emergencias médicas, que cuenta con tecnología de punta y 
                        última generación en los 41 Municipios y con la infraestructura suficiente, que permita ofrecer 
                        servicios prehospitalarios, interhospitalarios (referencia, contrareferencia) de calidad que 
                        respondan claramente a las necesidades de los 41 municipios.
                    </Text>
                </View>
            </View>

        </View>     
    );
  }
}

const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },

    container: {
        padding: 5,
        justifyContent: 'center',
        marginHorizontal: windowWidth > 600 ? 20 : 5,
        
    },

    
    textContainer: {
        marginLeft: windowWidth > 600 ? 120 : 10,
        marginRight: windowWidth > 600 ? 120 : 10,
        marginTop: 25,
        justifyContent: 'center',
    },

    card: {
        backgroundColor: '#ffffff',
        borderRadius: 20,
        padding: 25,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginVertical: 10,
      },

      cardHeader: {
        backgroundColor: '#007aff',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center'
      },

      cardTitle: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
      },

      cardBody: {
        padding: 10,
      },

      cardText: {
        color: 'black',
        fontSize: 16,
        textAlign: 'justify',
      },
});