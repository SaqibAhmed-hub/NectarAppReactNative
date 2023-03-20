import React from "react";
import {
    StyleSheet, Text, TouchableOpacity,
    View
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const SignInButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPressHandler}>
            <View style={ [SignInStyle.buttons, {backgroundColor : props.color} ]} >
                <Icon name={props.iconName} size={24} color="#fff" />
                <Text style={SignInStyle.text}> {props.title} </Text>
            </View>
        </TouchableOpacity>

    )
}

const SignInStyle = StyleSheet.create({
    buttons: {
        width: 350,
        padding: 16,
        flexDirection: 'row',
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center',
        alignSelf: 'center'

    },
    text: {
        color: 'white',
        fontSize: 16,
        marginLeft: 20,
        fontFamily: 'Gilroy-Bold'
    }
});

export default SignInButton;