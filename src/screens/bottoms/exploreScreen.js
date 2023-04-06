import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import SearchBar from '../../components/SearchBar';
import { exploreModel } from '../../model/exploreModel';

const ExploreScreen = ({navigation}) => {

    const generateAlphaColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        console.log('99' + randomColor);
        return `#${'99' + randomColor}`;
    };

    // 16777215 is equal to 0xFFFFFF value
    // const generateColor = () => {
    //     const randomColor = Math.floor(Math.random() * 16777215)
    //         .toString(16)
    //         .padStart(6, '0');
    //         console.log(randomColor);
    //     return `#${randomColor}`;
    // };

    const onClicked = (items) => {
        console.log(items);
        navigation.navigate('ProductListScreen', {
            title: items.title
        });
    }

    return (
        <View style={ExploreStyle.container}>
            <Text style={ExploreStyle.header}>Find Products</Text>
            {/* search bar  */}
            <SearchBar
                setSearch={() => { }}
                search={''}
                placeholder='Search Store'
            />
            {/* Grid List */}
            <FlatList
                bounces
                data={exploreModel}
                renderItem={({ item }) => (
                    <View
                        style={[ExploreStyle.card, {
                            backgroundColor: generateAlphaColor(),
                            borderColor: '#888',
                        }]}>
                        <Pressable
                            onPress={() => {onClicked(item)}}
                        >
                            <Image
                                source={item.img}
                                style={{
                                    resizeMode: 'contain',
                                    padding: 20
                                }}
                            />
                            <Text style={{
                                fontFamily: 'Gilroy-Bold',
                                fontSize: 16,
                                color: 'black',
                                alignItems: 'center',
                                textAlign: 'center',
                                marginTop: 30
                            }}>{item.title}</Text>
                        </Pressable>
                    </View>
                )
                }
                numColumns={2}
                keyExtractor={(item, index) => index}

            />
        </View>
    )
}

const ExploreStyle = StyleSheet.create({
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
    card: {
        flex: 1,
        flexDirection: 'column',
        margin: 12,
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'space-between',
    }
});

export default ExploreScreen;