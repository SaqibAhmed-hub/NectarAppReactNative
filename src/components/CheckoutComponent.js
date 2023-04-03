import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';


const CheckoutComponent = (props) => {
        return(
            <View style={checkStyle.product_name}>
            <Text style={{
                fontSize: 16,
                fontFamily: 'Gilroy-Bold',
                color: '#7C7C7C',
            }}> {props.title} </Text>
            <View style={{ flexDirection: 'row',alignItems : 'center' }} >
                <Text style={checkStyle.price_text}>{props.subTitle}</Text>
                <FeatherIcons name="chevron-right" size={24} color='black' />
            </View>
        </View>



        )
}


const checkStyle = StyleSheet.create({
    product_name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 20,
        alignItems :'center'
    },
    price_text: {
        fontSize: 14,
        fontFamily: 'Gilroy-Bold',
        color: 'black',
    },
})

export default CheckoutComponent;

