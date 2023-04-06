import React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import { bevargesModel } from '../../../model/bevargesModel';
import { fruitModel } from '../../../model/fruitsModel';
import { vegetable } from '../../../model/vegetableModel';
import images from '../../../resources/imagesLocation';
import ExploreList from '../../bottoms/exclusive/explorelist';


const ProductListScreen = ({ navigation, route }) => {

    const pageTitle = route.params.title


    function onSelectItem() {
        switch (pageTitle) {
            case 'Fresh Fruits & Vegetable':
                return fruitModel;

            case 'Cooking Oil & Ghee':
                return vegetable;

            case 'Meat & Fish':
                return bevargesModel;

            case 'Bakery & Snacks':
                return bevargesModel;

            case 'Dairy & Eggs':
                return bevargesModel;

            case 'Beverages':
                return bevargesModel;

            default:
                break;
        }

    }

    return (
        <View style={productStyle.container}>
            <View style={productStyle.icons}>
                <Pressable
                    onPress={() => {
                        navigation.goBack(null)
                    }}>
                    <Icons name="ios-chevron-back-outline" size={24} color='#181725' />
                </Pressable>
                <Text style={productStyle.header}>{pageTitle}</Text>
                <Image
                    source={images.filter_icon} />
            </View>
            <FlatList
                bounces
                data={onSelectItem()}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                renderItem={listItem => (
                    <ExploreList
                        onPressHandler={() => { }}
                        title={listItem.item.itemName}
                        qty={listItem.item.qty}
                        img={listItem.item.img}
                        price={listItem.item.price}
                    />
                )
                }
            />





        </View>
    )




}

const productStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Gilroy-Bold',
        padding: 20,
        color: '#181725'
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20
    }

});

export default ProductListScreen;