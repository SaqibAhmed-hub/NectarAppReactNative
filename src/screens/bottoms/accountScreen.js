import React from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icons from 'react-native-vector-icons/Feather';
import AccountModel from '../../model/AccountModel';
import images from '../../resources/imagesLocation';
import color from '../../utils/color';


const AccountScreen = ({navigation}) => {

    const goToLoginScreen = () => {
        navigation.navigate('LogInScreen');
    }

    return (
        <View style={AccountStyle.container}>
            <View style={{
                flex: 0.4,
                marginVertical :25
            }}>
                <View style={AccountStyle.profile}>
                    <View style={{
                        flex: 0.3,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                        <Image
                            source={images.user_profile}
                            style={AccountStyle.img}
                        />
                    </View>
                    <View style={{
                        flex: 0.7,
                        alignItems: 'flex-start',
                        justifyContent: 'center',
                    }}>
                        <Text style={AccountStyle.userName}>Saqib Ahmed</Text>
                        <Text>Imshuvo97@gmail.com</Text>
                    </View>
                </View>
            </View>
            <View style={AccountStyle.divider}></View>
            {/*  Account List */}
            <FlatList
                bounces
                data={AccountModel}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <View>
                        <View style={AccountStyle.Icons}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent : 'center',
                                alignItems : 'center'
                            }}>
                                <Image
                                    source={item.img} />
                                <Text style={AccountStyle.title}>{item.title}</Text>
                            </View>
                            <Icons name="chevron-right" size={24} color='black' />
                        </View>
                        <View style={AccountStyle.divider}></View>
                    </View>
                )}
            />

            <TouchableOpacity
                onPress={() => {
                    goToLoginScreen()
                 }}  >
                <View style={AccountStyle.btn_container}>
                    <Image source={images.logout_icon}
                        style={{
                            flex: 0.1,
                            resizeMode: 'contain'
                        }} />
                    <Text style={AccountStyle.btn_text}>Log Out</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const AccountStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 56,
    },
    divider: {
        width: '100%',
        borderWidth: 0.8,
        borderColor: '#E2E2E2B2',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 12,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginTop: 20,
        marginBottom: 20
    },
    img: {
        resizeMode: 'cover',
        borderRadius : 50
    },
    userName: {
        fontSize: 20,
        fontFamily: 'Gilroy-Bold',
        color: 'black'
    },
    Icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        marginHorizontal: 12
    },
    title : {
        marginStart: 8,
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        color: 'black'
    },
    btn_container : {
        flexDirection: 'row',
        backgroundColor: '#F2F3F2',
        padding: 16,
        borderRadius: 12,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 30
    },
    btn_text :{
        color: color.base,
        fontFamily: 'Gilroy-Medium',
        fontSize: 18,
        flex: 0.9,
        alignSelf: 'center',
        fontWeight: '500',
        textAlign: 'center'
    }
});

export default AccountScreen;