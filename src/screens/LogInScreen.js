import { useState } from 'react';
import {
    Image, ImageBackground, KeyboardAvoidingView,
    Pressable, StyleSheet,
    Text, TextInput, TouchableOpacity, View
} from 'react-native';
import AppButton from '../components/Button';
import images from '../resources/imagesLocation';

const LogInScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secureText, setSecureText] = useState(true)

    const handleIconChange = () => {
        setSecureText(!secureText)
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }} >
            <View style={LogInStyle.container}>
                <View style={LogInStyle.imgcontainer} >
                    <ImageBackground
                        style={LogInStyle.imgbackground}
                        source={images.login_bg}   >
                        <Image
                            source={images.color_icon}
                            style={LogInStyle.imgstyle}
                        />
                    </ImageBackground>
                </View>
                <View style={LogInStyle.logging}>

                    <Text style={{
                        fontSize: 20,
                        fontFamily: 'Gilroy-Medium',
                        color: '#000',
                        fontWeight: '400'

                    }}>Loging </Text>
                    <Text
                        style={{
                            fontFamily: 'Gilroy-Medium',
                            marginTop: 10
                        }}>
                        Enter your emails and password
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Gilroy-Bold',
                            marginTop: 20
                        }}>
                        Email
                    </Text>
                    <TextInput
                        placeholder='Enter your Email'
                        style={LogInStyle.input}
                        onChangeText={setEmail}
                        value={email}
                        keyboardType='email-address'
                        multiline={false}
                    />
                    <Text
                        style={{
                            fontFamily: 'Gilroy-Bold',
                            marginTop: 20
                        }}>
                        Password
                    </Text>
                    <TextInput
                        placeholder='Enter your Password'
                        style={LogInStyle.input}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={secureText}
                        returnKeyType='go'
                        maxLength={30}
                    >       
                    </TextInput>

                    <Pressable
                        onPress={() => handleIconChange()}>
                            <Image
                                style={{
                                    height: 24,
                                    width: 24,
                                    margin: 10
                                }}
                                source={secureText ? images.eye_close : images.eye_open}
                            />
                        </Pressable>

                    <Text style={{
                        marginTop: 20,
                        alignSelf: 'flex-end'
                    }}>Forgot Password?</Text>

                    <AppButton
                        onPressHandler = {()=> {
                            // handle the screen button
                        }}
                        title = 'Log In'
                    />

                    <Text style={{
                        marginTop: 20,
                        alignSelf: 'center'
                    }}>Don’t have an account? <Text style={{
                        color: '#53B175',
                        fontWeight: '300'
                    }}> Sign up</Text></Text>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const LogInStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    },
    logging: {
        margin: 20
    },
    imgcontainer: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgbackground: {
        flex: 1,
        width: '100%',
        resizeMode: "cover",
        alignItems: 'center',
        justifyContent: 'center'
    },
    imgstyle: {
        padding: 20,
        alignSelf: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
        fontSize: 16,
        fontFamily: 'Gilroy-Medium',
    }
});

export default LogInScreen;