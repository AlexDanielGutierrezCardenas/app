import React from 'react'
import MapView from "react-native-maps"
import { StyleSheet,View } from 'react-native';

const Maps = () => {
  return (
    <>
        <View style={styles.container}>
            <MapView style={styles.map} 
              initialRegion={{
                latitude: -19.582920,
                longitude: -65.765753,
                latitudeDelta: 0.20,
                longitudeDelta: 0.20,
              }}
            />
        </View>
    </>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    map: {
      width: '100%',
      height: '100%',
    },
  });
  
export default Maps