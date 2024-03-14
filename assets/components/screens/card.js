import React from "react";
import { View, Text, StatusBar } from "react-native";
import { FlashList } from "@shopify/flash-list";

const DATA = [
  {
    title: "First Item",
  },
  {
    title: "Second Item",
  },
];

const MyList = () => {
  return (
    <FlashList
      data={DATA}
      renderItem={({ item }) => <Text>{item.title}</Text>}
      estimatedItemSize={200}
    />
  );
};

// import React from 'react';
// import { StyleSheet,ScrollView, Text, View, Dimensions } from 'react-native';
// import Swiper from 'react-native-web-swiper';

// const width = Dimensions.get("window").width;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   containerTwo:{
//     height:"50%"
//   },    
//   slideContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     height:"50%"
//   },
//   slide1: {
//     backgroundColor: 'rgba(20,20,200,0.3)',
//   },
//   slide2: {
//     backgroundColor: 'rgba(20,200,20,0.3)',
//   },
//   slide3: {
//     backgroundColor: 'rgba(200,20,20,0.3)',
//   },
//   conta:{
//     borderRadius:"10px",
//     color:"blue",
//   }
// });

// export default class Card extends React.Component {
//   render() {
//     return (
//         <View style={styles.container}>
//             <Swiper buttonWrapperStyle={{alignItems: 'flex-start'}} showsButtons={true} paginationStyle={{bottom: undefined, left: undefined, top:35, right:"47%"}}>
//             <View style={[styles.slideContainer,styles.slide1]}>
//                 <Text>Slide 1</Text>
//             </View>
//             <View style={[styles.slideContainer,styles.slide2]}>
//                 <Text>Slide 2</Text>
//             </View>
//             <View style={[styles.slideContainer,styles.slide3]}>
//                 <Text>Slide 3</Text>
//             </View>
//             </Swiper>
//         </View>
    
//     );
//   }
// }