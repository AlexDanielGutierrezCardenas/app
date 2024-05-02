import { StyleSheet, View, Image, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Carousel from 'react-native-reanimated-carousel';

export default function AppCarousel() {
    const [pagingEnabled, setPagingEnabled] = useState(true);
    const { width, height } = Dimensions.get('window');

    const list = [
        {
            id: 1,
            title: 'uno',
            image: require('../database/images/quieneSomos/img3.jpg'),
        },
        {
            id: 2,
            title: 'dos',
            image: require('../database/images/quieneSomos/img4.jpg'),
        },
        {
            id: 3,
            title: 'tres',
            image: require('../database/images/quieneSomos/img5.jpg'),
        },
        {
            id: 4,
            title: 'cuatro',
            image:require('../database/images/quieneSomos/img1.jpg'),
        },
        {
            id: 5,
            title: 'cinco',
            image:require('../database/images/quieneSomos/img6.png'),
        }
        
    ];
      
    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                height={height / 2}
                data={list}
                autoPlay={true}
                pagingEnabled={pagingEnabled}
                scrollAnimationDuration={1000}
                renderItem={({ item }) => (
                    <View style={styles.carouselItem}>
                        <Image style={styles.image} source={item.image} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },

    carouselItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

});
