import { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput, View
} from 'react-native';
import SignInButton from '../components/SignInButton';
import images from '../resources/imagesLocation';


const SignInScreen = ({ navigation }) => {

    const [number, onChangeNumber] = useState('');

    return (
        <View
            style={SignInStyle.container}>

            <Image
                source={images.fruit_img}
                style={
                    {
                        width: '100%',
                        backgroundColor: 'white',
                        resizeMode: "stretch",
                    }
                }
            />

            <Text style={SignInStyle.textstyle}>
                Get your groceries{'\n'}with nectar
            </Text>

            <TextInput
                placeholder='+880'
                style={SignInStyle.input_area}
                keyboardType="numeric"
                onChangeText={onChangeNumber}
                value={number}
                maxLength={12}
            >
            </TextInput>

            <Text style={
                {
                    alignSelf: 'center',
                    marginVertical: 8
                }
            }>
                Or connect with social media
            </Text>

            <SignInButton
                onPressHandler={() => { 
                    navigation.navigate('LogInScreen')
                }}
                title={"Continue with Google"}
                iconName={'google'}
                color={'#5383EC'}
            />

            <SignInButton
                onPressHandler={() => { }}
                title={"Continue with Facebook"}
                iconName={'facebook'}
                color={'#4A66AC'}
            />
        </View>
    )


};

const SignInStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: 'white'
    },
    textstyle: {
        fontFamily: 'Gilroy-Black',
        fontSize: 30,
        color: 'black',
        alignItems: 'flex-start',
        marginStart: 20
    },
    input_area: {
        width: '80%',
        alignItems: 'stretch',
        padding: 16,
        borderColor: '#E2E2E2',
        marginHorizontal: 20,
        borderBottomWidth: 1,
        fontSize: 16,
        fontFamily: 'Gilroy-Medium'
    }
});


export default SignInScreen;