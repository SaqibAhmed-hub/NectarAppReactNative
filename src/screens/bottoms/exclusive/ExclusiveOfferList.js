import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import color from "../../../utils/color";

const ExclusiveOfferList = (props) => {
    return (
        <View style={ExclusiveStyle.container}>
            <Image
                source={props.img}
                style={ExclusiveStyle.img}
            />
            <Text style={ExclusiveStyle.header}>{props.title}</Text>
            <Text style={ExclusiveStyle.qty}> {props.qty} pcs, Priceg </Text>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop : 20
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
        resizeMode : 'cover',
        height : 80,
    },
    header: {
        marginTop: 10,
        fontFamily: 'Gilroy-Medium',
        fontWeight: 'bold'
    },
    qty: {
        fontSize: 12
    },
    price: {
        fontFamily: 'Gilroy-Black',
        fontSize: 18,
        fontWeight: '900'
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        backgroundColor: color.base
    }
});

export default ExclusiveOfferList;
