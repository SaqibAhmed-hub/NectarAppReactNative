import { useState } from 'react';
import {
    Image, ImageBackground, KeyboardAvoidingView, Pressable, StyleSheet,
    Text, TextInput, View
} from 'react-native';
import AppButton from '../components/Button';
import images from '../resources/imagesLocation';


const SignInScreen = ({ navigation }) => {


    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secureText, setSecureText] = useState(true)

    const handleIconChange = () => {
        setSecureText(!secureText)
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }} >
            <View style={SigninStyle.container}>
                <View style={SigninStyle.imgcontainer} >
                    <ImageBackground
                        style={SigninStyle.imgbackground}
                        source={images.login_bg}   >
                        <Image
                            source={images.color_icon}
                            style={SigninStyle.imgstyle}
                        />
                    </ImageBackground>
                </View>
                <View style={SigninStyle.logging}>

                    <Text style={{
                        fontSize: 22,
                        fontFamily: 'Gilroy-Medium',
                        color: '#000',
                        fontWeight: '600'
                    }}>Sign Up</Text>
                    <Text
                        style={{
                            fontFamily: 'Gilroy-Medium',
                            marginTop: 10
                        }}>
                        Enter your credentials to continue
                    </Text>
                    <Text
                        style={{
                            fontFamily: 'Gilroy-Bold',
                            marginTop: 20
                        }}>
                        Username
                    </Text>
                    <TextInput
                        placeholder='Enter your username'
                        style={SigninStyle.input}
                        onChangeText={setUsername}
                        value={username}
                        keyboardType='default'
                        multiline={false}
                    />
                    <Text
                        style={{
                            fontFamily: 'Gilroy-Bold',
                            marginTop: 20
                        }}>
                        Email
                    </Text>
                    <TextInput
                        placeholder='Enter your email'
                        style={SigninStyle.input}
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
                            style={SigninStyle.password}
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
                    <Text
                        style={{
                            fontFamily: 'Gilroy-Medium',
                            marginTop: 20,
                            marginHorizontal : 10 
                        }}>
                        By continuing you agree to our <Text style={SigninStyle.policytext}> Terms of Service </Text>
                        and <Text style={SigninStyle.policytext}>Privacy Policy</Text>.
                    </Text>
                    <AppButton
                        onPressHandler={() => { }}
                        title='Sign Up'
                    />
                </View>
            </View>
        </KeyboardAvoidingView>

    )
}

const SigninStyle = StyleSheet.create({
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
    },
    policytext: {
        color: '#53B175',
        fontWeight: '600'
    }
});

export default SignInScreen;