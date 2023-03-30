import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import SearchBar from '../../../components/SearchBar';
import { fruitModel } from '../../../model/fruitsModel';
import { vegetable } from '../../../model/vegetableModel';
import images from '../../../resources/imagesLocation';
import color from '../../../utils/color';
import ExclusiveOfferList from '../exclusive/ExclusiveOfferList';

const ShopScreen = ({ navigation }) => {


    const [username, setUsername] = useState('')
    const [search, setSearch] = useState('')


    useEffect(() => {
        getData()
    }, [])

    const onSubmit = (listItem) => {
        console.log(listItem.item);
        navigation.navigate('ProductDetailsScreen', {
            item: listItem.item
        });
    }

    function getData() {
        AsyncStorage.getItem('loginemail')
            .then(value => {
                setUsername(value)
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <View style={shopScreenStyle.container}>
            <View style={{
                justifyContent: 'center',
                alignSelf: 'center',
                margin: 20
            }}>
                <Image
                    source={images.color_icon}
                    style={{
                        width: 24,
                        height: 26,
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Icons name="location-sharp" size={24} color='#555555' />
                <Text style={shopScreenStyle.textStyle}>GreamsRoad , Chennai</Text>
            </View>
            {/* search bar  */}
            <SearchBar
                setSearch={() => { }}
                search={{}}
                placeholder='Search Store'
            />
            {/* Create a banner */}
            <Image
                source={images.banner_img}
                style={shopScreenStyle.banner}
            />
            {/* List of Shopping Items  */}
            <ScrollView
                nestedScrollEnabled={true}
                scrollEnabled
            >
                {/* Exclusive Offer */}
                <View style={shopScreenStyle.listTitle} >
                    <Text style={shopScreenStyle.bigTitle}>Exclusive Offer</Text>
                    <Text style={shopScreenStyle.smallTitle}>See all</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        bounces
                        horizontal={true}
                        data={fruitModel}
                        showsHorizontalScrollIndicator={false}
                        renderItem={listItem => (
                            <ExclusiveOfferList
                                onPressHandler={() => { onSubmit(listItem) }}
                                title={listItem.item.itemName}
                                qty={listItem.item.qty}
                                img={listItem.item.img}
                                price={listItem.item.price}
                            />
                        )}
                    />
                </View>
                {/* Best Selling */}
                <View style={shopScreenStyle.listTitle} >
                    <Text style={shopScreenStyle.bigTitle}>Best Selling</Text>
                    <Text style={shopScreenStyle.smallTitle}>See all</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        bounces
                        horizontal={true}
                        data={vegetable}
                        showsHorizontalScrollIndicator={false}
                        renderItem={listItem => (
                            <ExclusiveOfferList
                                onPressHandler={() => { onSubmit(listItem) }}
                                title={listItem.item.itemName}
                                qty={listItem.item.qty}
                                img={listItem.item.img}
                                price={listItem.item.price}
                            />
                        )}
                    />
                </View>
                {/* Grocries */}
                <View style={shopScreenStyle.listTitle} >
                    <Text style={shopScreenStyle.bigTitle}>Grocries</Text>
                    <Text style={shopScreenStyle.smallTitle}>See all</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <FlatList
                        bounces
                        horizontal={true}
                        data={vegetable}
                        showsHorizontalScrollIndicator={false}
                        renderItem={listItem => (
                            <ExclusiveOfferList
                                onPressHandler={() => { onSubmit(listItem) }}
                                title={listItem.item.itemName}
                                qty={listItem.item.qty}
                                img={listItem.item.img}
                                price={listItem.item.price}
                            />
                        )}
                    />
                </View>
            </ScrollView>
        </View>
    )





}



const shopScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginBottom: 60
    },
    textStyle: {
        alignItems: 'center',
        fontSize: 14,
        fontFamily: 'Gilroy-Medium',
        fontWeight: '700',
        marginStart: 6
    },
    banner: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginVertical: 16
    },
    listTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 12
    },
    bigTitle: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 22,
        color: 'black',
        fontWeight: '500',
    },
    smallTitle: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 13,
        color: color.base,
        fontWeight: '500'
    }
})

export default ShopScreen;