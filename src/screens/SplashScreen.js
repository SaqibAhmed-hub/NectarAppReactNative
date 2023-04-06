import { useEffect } from 'react';
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native';
import images from '../resources/imagesLocation';
import AppColor from '../utils/color';


const SplashScreen = ({ navigation }) => {


    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('HomeScreen')
        }, 3000);
    });

    return (
        <View style={Styles.container}>
            <StatusBar hidden={true} />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent : 'space-between'
                }}>
                <Image
                    source={images.app_icon}
                />
                <Text style={Styles.textBold}>
                    nectar{'\n'}<Text 
                    style = {Styles.textStyle}>online groceriet</Text>
                </Text>
            </View>
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColor.base
    },
    textStyle: {
        fontSize: 13,
        color: 'white',
        letterSpacing: 1.5
    },
    textBold: {
        fontFamily: 'Gilroy-Medium',
        color: 'white',
        padding: 4,
        fontSize: 40,
        letterSpacing: 1.2
    }

});

export default SplashScreen;