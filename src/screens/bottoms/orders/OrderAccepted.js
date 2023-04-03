import React, { useState } from 'react';
import View, { Image, Pressable, StyleSheet, Text } from 'react-native';
import AppButton from "../../../components/Button";
import images from "../../../resources/imagesLocation";

const OrderAccepted = ({navigation}) => {
    
    return (
        <View
            style={OrderStyle.container} >
            <Image
                source={images.order_accept}
                style={OrderStyle.img}
            />
            <Text style={OrderStyle.title}>Your Order has been accepted</Text>
            <Text
                style={OrderStyle.subtitle}
            >Your items has been placcd and is on
                it’s way to being processed</Text>

            <AppButton
                onPress={() => { }}
                title="Track Order"
            />
            <Pressable
                onPress={() => { }}  >
                <Text style={OrderStyle.text_style}>Back to home</Text>
            </Pressable>


        </View>
    )
}

const OrderStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    img: {
        resizeMode: 'cover',
        padding: 18,

    },
    title: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 22,
        textAlign: 'center',
        color: '#181725'
    },
    subtitle: {
        fontFamily: 'Gilroy-Black',
        fontSize: 14,
        textAlign: 'center'
    },
    text_style: {
        padding: 16,
        alignSelf: 'center',
        fontFamily: 'Gilroy-Medium',
        fontSize: 18,
        color: 'black'
    }

})

export default OrderAccepted;
