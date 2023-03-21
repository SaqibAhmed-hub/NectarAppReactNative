import React from "react";
import {
    StyleSheet, Text, TouchableOpacity,
    View
} from "react-native";
import color from '../utils/color'

const AppButton = (props) => {
    return(
    <TouchableOpacity
        onPress={props.onPressHandler}>
        <View
            style={ButtonStyle.outer_view}>
            <Text
                style={ButtonStyle.text}>
                   {props.title}
            </Text>
        </View>

    </TouchableOpacity>

    )
}

const ButtonStyle = StyleSheet.create({
    outer_view: {
        width: 350,
        padding: 16,
        backgroundColor: color.base,
        borderRadius: 10,
        marginTop: 20,
        alignSelf: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Gilroy-Bold'
    }
});

export default AppButton;