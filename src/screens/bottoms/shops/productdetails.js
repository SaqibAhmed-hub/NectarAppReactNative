import React, { useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import images from '../../../resources/imagesLocation';
import color from '../../../utils/color';



const ProductDetailsScreen = () => {
        const route = useRoute()
    return(
        <View >
            <Text> Product Screen</Text>
            <Text>{route.params.item.itemName}</Text>
        </View>
    )

}

export default ProductDetailsScreen;