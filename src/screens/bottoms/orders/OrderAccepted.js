import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import AppButton from "../../../components/Button";
import images from "../../../resources/imagesLocation";

const OrderAccepted = ({ navigation }) => {

    const goBackToHome = () => {
        navigation.navigate('shopScreen');
    }
    const goBackRoute = () => {
        navigation.popToTop();
    }

    return (
        <View
            style={OrderStyle.container} >
            <Image
                source={images.order_accept}
                style={OrderStyle.img}
            />
            <Text style={OrderStyle.title}>Your Order has been {'\n'} accepted</Text>
            <Text
                style={OrderStyle.subtitle}
            >Your items has been placcd and is on
                it’s way to being processed</Text>

            <View
                style={{
                    height: 100
                }}
            ></View>

            <AppButton
                onPress={() => { 
                    goBackRoute()
                }}
                title="Track Order"
            />
            <Pressable
                onPress={() => { 
                    goBackToHome()
                }}  >
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
        resizeMode: 'contain',
        padding: 18,
        marginTop: 100,

    },
    title: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 22,
        textAlign: 'center',
        color: '#181725',
        padding: 8,
        marginTop: 20
    },
    subtitle: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 20,
        marginHorizontal: 32
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
