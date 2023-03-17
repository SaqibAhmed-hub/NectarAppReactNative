import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import images from '../resources/imagesLocation';
import Icon from 'react-native-vector-icons/FontAwesome'


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

            <TouchableOpacity
                onPress={() => {
                    //Need Google Sign In
                }}
            >
                <View
                    style={{
                        width: 350,
                        flexDirection: 'row',
                        padding: 16,
                        backgroundColor: '#5383EC',
                        borderRadius: 10,
                        marginTop: 20,
                        alignItems: 'center',
                        alignSelf: 'center'

                    }}>

            <Icon name="google" size={24} color="#fff" />
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            marginLeft :20,
                            fontFamily: 'Gilroy-Bold'
                        }}>
                        Continue with Google
                    </Text>

                </View>

            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    //Need FaceBook Sign In
                }}
            >
                <View
                    style={{
                        width: 350,
                        padding: 16,
                        flexDirection: 'row',
                        backgroundColor: '#4A66AC',
                        borderRadius: 10,
                        marginTop: 20,
                        alignItems: 'center',
                        alignSelf: 'center'

                    }}>
            

                        <Icon name="facebook" size={24} color="#fff" />

                        <Text
                            style={{
                                color: 'white',
                                fontSize: 16,
                                marginLeft :20,
                                fontFamily: 'Gilroy-Bold'
                            }}>
                            Continue with Facebook
                        </Text>




                

                </View>
            </TouchableOpacity>
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