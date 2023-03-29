import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import FontIcons from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import Accordins from '../../../components/Accordins';
import color from '../../../utils/color';
import AppButton from '../../../components/Button';


const ProductDetailsScreen = ({ navigation, route }) => {

    const [qtyno, Setqtyno] = useState(route.params.item.qty);



    return (
        <View style={productDetailStyle.container}>
            <View style={productDetailStyle.background}>
                <View style={productDetailStyle.icons}>
                    <Icons name="ios-chevron-back-outline" size={24} color='#181725' />
                    <Icons name="share-outline" size={24} color='#181725' />
                </View>
                <Image
                    source={route.params.item.img}
                    style={productDetailStyle.img_style}
                />
                <View style = {{ height : 50}}></View>
            </View>
            <View style={productDetailStyle.product_name}>
                <Text style={{
                    fontSize: 22,
                    fontFamily: 'Gilroy-Bold',
                    color: 'black',
                }}>{route.params.item.itemName} {'\n'}<Text style={{
                    fontSize: 14,
                    fontFamily: 'Gilroy-Medium',
                    color: '#7C7C7C'
                }}>1kg, Price </Text></Text>
                <Icons name="heart-outline" size={24} color='#7C7C7C' />
            </View>
            <View style={productDetailStyle.price}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Pressable
                        onPress={() => { Setqtyno(qtyno - 1) }} >
                        <FontIcons name="minus" size={20} color='#7C7C7C' />
                    </Pressable>
                    <Text style={productDetailStyle.qty_text}>{qtyno}</Text>
                    <Pressable
                        onPress={() => { Setqtyno(qtyno + 1) }} >
                        <FontIcons name="plus" size={20} color={color.base} />
                    </Pressable>
                </View>
                <Text style={productDetailStyle.price_text}>{route.params.item.price}</Text>
            </View>
            {/* This Expanded View. */}
            <View style = {{
                height : 40
            }}></View>
            <View style={productDetailStyle.divider}></View>
            <Accordins
                title="Product Detail">
                <Text style={{
                    fontFamily: 'Gilroy-Medium',
                    fontSize: 14,
                    marginTop : 8
                }}>
                    Apples are nutritious.
                    Apples may be good for weight loss.
                    apples may be good for your heart.
                    As part of a healtful and varied diet.</Text>
            </Accordins>
            <View style={productDetailStyle.divider}></View>
            <Accordins
                title="Nutritions">
                <Text style={{
                    fontFamily: 'Gilroy-Medium',
                    fontSize: 14,
                    marginTop : 8
                }}>
                    Apples are nutritious.
                    Apples may be good for weight loss.
                    apples may be good for your heart.
                    As part of a healtful and varied diet.</Text>
            </Accordins>
            <View style={productDetailStyle.divider}></View>
            <Accordins
                title="Review">
                <Text style={{
                    fontFamily: 'Gilroy-Medium',
                    fontSize: 14,
                    marginTop : 8
                }}>
                    Apples are nutritious.
                    Apples may be good for weight loss.
                    apples may be good for your heart.
                    As part of a healtful and varied diet.</Text>
            </Accordins>
            <AppButton
                onPressHandler={() => {

                }}
                title='Add To Basket'
            />

        </View>
    )

}

const productDetailStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    background: {
        backgroundColor: '#F2F3F2',
        borderBottomEndRadius: 16,
        borderBottomStartRadius: 16,
        padding: 16,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 8,
        alignItems: 'center',
        marginTop: 20
    },
    img_style: {
        marginTop: 30,
        alignSelf: 'center',
        padding: 20,
        justifyContent: 'center',
        width: 300,
        height: 120,
        resizeMode: 'contain',

    },
    product_name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 20,
        alignSelf: 'auto'
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 20,
        alignItems: 'center'
    },
    price_text: {
        fontSize: 24,
        fontFamily: 'Gilroy-Bold',
        color: 'black'
    },
    qty_text: {
        padding: 16,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        margin: 8,
        fontFamily: 'Gilroy-Bold',
        color: 'black'
    },
    divider: {
        width: '90%',
        borderWidth: 0.8,
        borderColor: '#E2E2E2B2',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 12,
    
    }
});

export default ProductDetailsScreen;