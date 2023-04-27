import { useEffect, useState } from 'react';
import {
    Alert,
    Image, ImageBackground, KeyboardAvoidingView, Pressable, StyleSheet,
    Text, TextInput, View
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AppButton from '../components/Button';
import { getSignUpAction,clearSignUpState } from '../redux/action/signUpAction';
import images from '../resources/imagesLocation';
import { isEmptyObject } from '../utils/contants';


const SignInScreen = ({ navigation }) => {


    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [secureText, setSecureText] = useState(true)

    const signUpReducer = useSelector(state => state.getSignUp);
    const dispatch = useDispatch();

    const handleIconChange = () => {
        setSecureText(!secureText)
    }
    const verifySignUp = () => {
        if (email === '' || password === '') {
            Alert.alert('Alert', 'Please provide the email and password')
        } else if (password.length < 8) {
            Alert.alert('Alert', 'Password should be minimum 8 char')
        } else if (username === '') {
            Alert.alert('Alert', 'please enter the username')
        } else {
            //call the Signup API 
            let data = {
                email: email,
                password: password,
                fullname: username
            }
            dispatch(getSignUpAction(data))
        }
    }

    useEffect(() => {
        setSignUpScreen()
    }, [signUpReducer.signUp])

    function setSignUpScreen() {
        if (isEmptyObject(signUpReducer.signUp)) {
            //Do Nothing
        } else {
            let response = signUpReducer.signUp
            if (response.statusCode === 200) {
                Alert.alert(
                    'Success',
                    'Registeration Successful',
                    [
                        {
                            text: 'OK', onPress: () => {
                                console.log('OK Pressed')
                                dispatch(clearSignUpState())
                                navigation.navigate('LogInScreen');
                            },
                            
                        }
                    ]
                )
            } else {
                Alert.alert(
                    'Alert',
                    response.message
                )
            }
        }
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
                            marginHorizontal: 10
                        }}>
                        By continuing you agree to our <Text style={SigninStyle.policytext}> Terms of Service </Text>
                        and <Text style={SigninStyle.policytext}>Privacy Policy</Text>.
                    </Text>
                    <AppButton
                        onPressHandler={() => {
                            verifySignUp()
                        }}
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