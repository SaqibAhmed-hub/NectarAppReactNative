import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import AppButton from '../../components/Button';
import { FavoriteModel } from '../../model/FavoriteModel';

const FavouriteScreen = () => {

    return (
        <View style={FavouriteStyle.container}>
            <Text style={FavouriteStyle.header}>Favorurite</Text>
            <View style={FavouriteStyle.border}></View>
            {/* This is Flat list for Favorite */}
            <FlatList
                bounces
                data={FavoriteModel}
                renderItem={({ item }) => (
                    <View style={{
                        flex: 1,
                        marginTop: 20,

                    }}>
                        {/*  This is Image and View  */}
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            height: 80
                        }}>
                            <Image
                                source={item.img}
                                style={FavouriteStyle.img}
                            />
                            <View style={{
                                flexDirection: 'column',
                                flex: 0.7,
                                justifyContent : 'center'
                            }}>
                                <View style={FavouriteStyle.product_name}>
                                    <Text style={{
                                        fontSize: 16,
                                        fontFamily: 'Gilroy-Bold',
                                        color: 'black',
                                    }}>{item.itemName} {'\n'}<Text style={{
                                        fontSize: 12,
                                        fontFamily: 'Gilroy-Medium',
                                        color: '#7C7C7C'
                                    }}>{item.qty}, Price </Text></Text>
                                    <View style={{ flexDirection: 'row' }} >
                                        <Text style={FavouriteStyle.price_text}>{item.price}</Text>
                                        <Icons name="chevron-right" size={24} color='black' />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={FavouriteStyle.divider}></View>
                    </View>
                )}
                keyExtractor={(item, index) => index}
            />

            <AppButton 
                onPress = {() => {}}
                title = "Add All To Cart"
            />
        </View>
    )
}

const FavouriteStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 60,
    },
    header: {
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Gilroy-Bold',
        padding: 20,
        color: '#181725'
    },
    border: {
        width: '100%',
        borderColor: 'rgba(226, 226, 226, 1)',
        borderWidth: 1

    },
    product_name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        alignItems: 'center'
    },
    price_text: {
        fontSize: 16,
        fontFamily: 'Gilroy-Bold',
        color: 'black',
        paddingRight: 8
    },
    qty_text: {
        padding: 12,
        borderRadius: 12,
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
    },
    img: {
        flex: 0.2,
        width: '80%',
        height: '80%',
        alignSelf: 'center',
        resizeMode: 'contain',
    }
});

export default FavouriteScreen;