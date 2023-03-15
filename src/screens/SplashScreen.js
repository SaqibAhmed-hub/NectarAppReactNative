import {useEffect } from 'react';
import { Text, View,StyleSheet } from 'react-native';
import AppColor from '../utils/color'


const SplashScreen = ({navigation}) => {


  useEffect(() => {
    setTimeout(() => {
        navigation.navigate('HomeScreen')
    }, 3000);
  });

    return (
        <View style = {Styles.container}>  
            <Text style = {Styles.textBold}>
                nectar
            </Text>
            <Text style = {Styles.textStyle}>
            online groceriet
            </Text>
        </View>
    )

}



const Styles =  StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent: 'center',
        backgroundColor : AppColor.base
    },
    textStyle : {
        fontSize : 12,
        color : 'white',
        letterSpacing : 1.5 
    },
    textBold : {
        fontFamily : 'Gilroy-Medium',
        color : 'white',
        padding : 4,
        fontSize: 36,
        letterSpacing : 1.2
    }

});

export default SplashScreen;