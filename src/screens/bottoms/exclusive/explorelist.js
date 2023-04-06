import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import color from "../../../utils/color";

const ExploreList = (props) => {
    return (

        <View style={ExclusiveStyle.container}>
            <Pressable 
                onPress={props.onPressHandler}>
                <Image
                    source={props.img}
                    style={ExclusiveStyle.img}
                />
                <Text style={ExclusiveStyle.header}>{props.title}</Text>
                <Text style={ExclusiveStyle.qty}> {props.qty}</Text>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 20,
                    alignItems : 'center'
                }}>
                    <Text style={ExclusiveStyle.price}>
                        {props.price}
                    </Text>
                    <Pressable >
                        <View style={ExclusiveStyle.button}>
                            <Icons name='plus' color='#fff' size={24} />
                        </View>
                    </Pressable>
                </View>
            </Pressable>
        </View>
    )
}

const ExclusiveStyle = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 8,
        borderColor: '#E2E2E2',
        borderWidth: 1,
        marginHorizontal: 8,
        padding: 12,
        marginTop: 12,
    },
    img: {
        padding: 4,
        resizeMode: 'contain',
        height: 80,
        alignSelf : 'center'
    },
    header: {
        marginTop: 10,
        fontFamily: 'Gilroy-Bold',
        fontSize: 16,
        color: 'black'
    },
    qty: {
        fontSize: 14,
        fontFamily: 'Gilroy-Medium'
    },
    price: {
        fontFamily: 'Gilroy-Black',
        fontSize: 18,
        fontWeight: '900',
        color: 'black'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        backgroundColor: color.base,
        padding : 10
    }
});

export default ExploreList;
