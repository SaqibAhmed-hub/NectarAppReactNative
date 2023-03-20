import { useState } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TextInput, View,
    TouchableOpacity
} from 'react-native';
import images from '../resources/imagesLocation';

const LogInScreen = ({ navigation }) => {

    const [email, setEmail] = useState('')
    const [password, SetPassword] = useState('')

    return (
        <View style={LogInStyle.container}>
            <View style={LogInStyle.imgcontainer} >
                <Image
                    source={images.color_icon}
                    style={LogInStyle.imgstyle}
                />
            </View>
            <Text style={{
                fontSize: 20,
                fontFamily: 'Gilroy-Medium',
                color: '#000'

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
                onChangeText={SetPassword}
                value={password}
                secureTextEntry={true}
                returnKeyType='go'
            />

            <Text style={{
                marginTop: 20,
                alignItems : 'flex-end'
            }}>Forgot Password?</Text>

            <TouchableOpacity
                onPress={() => {
                    
                }}
            >
                <View
                    style={{
                        width: 350,
                        padding: 16,
                        backgroundColor: '#53B175',
                        borderRadius: 10,
                        marginTop: 20,
                        alignItems: 'center'

                    }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 16,
                            fontFamily: 'Gilroy-Bold'
                        }}>
                        Log In
                    </Text>

                </View>

            </TouchableOpacity>

            <Text style= {{
                marginTop : 20,
                alignSelf : 'center'
            }}>Don’t have an account?  Sign up</Text>






        </View>
    )
}

const LogInStyle = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 20
    },
    imgcontainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgstyle: {
        padding: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderColor : '#E2E2E2',
        fontSize: 16,
        fontFamily: 'Gilroy-Medium'
    }
});

export default LogInScreen;