import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import {
    Alert,
    Image, ImageBackground, KeyboardAvoidingView,
    Pressable, StyleSheet,
    Text, TextInput, View
} from 'react-native';
import AppButton from '../../components/Button';
import images from '../../resources/imagesLocation';

const LogInScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secureText, setSecureText] = useState(true)

    const handleIconChange = () => {
        setSecureText(!secureText)
    }

    function screenCheck() {
        if (email === '' || password === '') {
            Alert.alert('Alert', 'Please provide the email and password')
        } else if (password.length < 8) {
            Alert.alert('Alert', 'Password should be minimum 8 char')
        } else {
            //Save the value in Async Storage and Navigate to Dashboard Screen
            setLoginData()
        }
    }

    async function setLoginData() {
        try {
            AsyncStorage.setItem('loginemail', email)
            AsyncStorage.setItem('loginpass', password)
        } catch (err) {
            console.log(err);
        }
        //Send to Dashboard Screen
        navigation.navigate('DashBoardScreen');
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
                    <View
                        style={{
                            flexDirection: 'row'
                        }}>
                        <TextInput
                            placeholder='Enter your Password'
                            style={LogInStyle.password}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={secureText}
                            returnKeyType='go'
                            maxLength={30}
                        >
                        </TextInput>

                        <Pressable
                            onPress={() => handleIconChange()}
                            style={{
                                borderBottomWidth: 1,
                                borderColor: '#E2E2E2',
                                flex: 0.1
                            }}>
                            <Image
                                style={{
                                    height: 24,
                                    width: 24,
                                    margin: 10
                                }}
                                source={secureText ? images.eye_close : images.eye_open}
                            />
                        </Pressable>

                    </View>

                    <Text style={{
                        marginTop: 20,
                        alignSelf: 'flex-end'
                    }}>Forgot Password?</Text>

                    <AppButton
                        onPressHandler={() => {
                            // handle the screen button
                            // screenCheck()
                            //Send to Dashboard Screen
                            navigation.navigate('DashBoardScreen');
                        }}
                        title='Log In'
                    />

                    <Text style={{
                        marginTop: 20,
                        alignSelf: 'center'
                    }}>Don’t have an account?
                        <Pressable
                            onPress={() => {
                                //Call to Sign up Page
                                navigation.navigate('SignInScreen')
                            }}>
                            <Text style={{
                                color: '#53B175',
                                fontWeight: '700'
                            }}> Sign up</Text>

                        </Pressable>
                    </Text>
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
    },
    password: {
        borderBottomWidth: 1,
        borderColor: '#E2E2E2',
        fontSize: 16,
        fontFamily: 'Gilroy-Medium',
        flex: 0.9
    }
});

export default LogInScreen;