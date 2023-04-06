import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import React, { useCallback, useMemo, useRef, useState } from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import FontIcons from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Ionicons';
import AppButton from '../../components/Button';
import CheckoutComponent from '../../components/CheckoutComponent';
import { fruitModel } from '../../model/fruitsModel';
import color from '../../utils/color';
import CustomBackdrop from '../../components/backdrop';


const CartScreen = ({navigation}) => {

    const [qtyno, Setqtyno] = useState(0);

    const bottomSheetRef = useRef(null);
    // variables
    const snapPoints = useMemo(() => ['25%','60%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const openBottomSheet = useCallback(() => {
        bottomSheetRef.current?.present();
    }, []);

    const closeModel = useCallback(() => {
        bottomSheetRef.current?.close();
    }, []);

    const goToCheckOutScreen = () => {
        navigation.navigate('OrderAccepted',{});
    }

    return (
        <BottomSheetModalProvider>
                <View style={cartStyle.container}>
                    <Text style={cartStyle.header}>
                        My Cart
                    </Text>
                    <View style={cartStyle.border}></View>
                    {/* Show the list of Card Item */}
                    <FlatList
                        data={fruitModel}
                        renderItem={({ item }) => (
                            // This is Container View
                            <View style={{ flex: 1 }}>
                                {/*  This is Image and View  */}
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-around'
                                }}>
                                    <Image
                                        source={item.img}
                                        style={cartStyle.img}
                                    />
                                    <View style={{ flexDirection: 'column', flex: 0.7 }}>
                                        <View style={cartStyle.product_name}>
                                            <Text style={{
                                                fontSize: 18,
                                                fontFamily: 'Gilroy-Bold',
                                                color: 'black',
                                            }}>{item.itemName} {'\n'}<Text style={{
                                                fontSize: 14,
                                                fontFamily: 'Gilroy-Medium',
                                                color: '#7C7C7C'
                                            }}>1kg, Price </Text></Text>
                                            <Icons name="close-outline" size={24} color='#7C7C7C' />
                                        </View>
                                        <View style={cartStyle.price}>
                                            <View style={{
                                                flexDirection: 'row',
                                                alignItems: 'center'
                                            }}>
                                                <Pressable
                                                    onPress={() => { Setqtyno(qtyno - 1) }} >
                                                    <FontIcons name="minus" size={20} color='#7C7C7C' />
                                                </Pressable>
                                                <Text style={cartStyle.qty_text}>{qtyno}</Text>
                                                <Pressable
                                                    onPress={() => { Setqtyno(qtyno + 1) }} >
                                                    <FontIcons name="plus" size={20} color={color.base} />
                                                </Pressable>
                                            </View>
                                            <Text style={cartStyle.price_text}>{item.price}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={cartStyle.divider}></View>
                            </View>
                        )}
                        bounces

                    />

                    <AppButton
                        onPressHandler={() => {
                            openBottomSheet()
                        }}
                        title="Go to Checkout"
                    />


                    <BottomSheetModal
                        ref={bottomSheetRef}
                        index={1}
                        snapPoints={snapPoints}
                        animateOnMount={true}
                        backgroundStyle={{
                            borderRadius: 16
                        }}
                        onChange={handleSheetChanges}
                        onDismiss={() => {

                        }}
                        backdropComponent={CustomBackdrop}

                    >
                        <View style={cartStyle.bottomcontainer}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginHorizontal: 16,
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    fontFamily: 'Gilroy-Black',
                                    fontSize: 18,
                                    color: '#000'
                                }}> Checkout</Text>
                                <Pressable
                                    onPress={() => {
                                        closeModel()
                                    }}>
                                    <Icons name="close" size={30} color='black'></Icons>
                                </Pressable>
                            </View>
                            <View style={cartStyle.divider}></View>
                            <CheckoutComponent
                                title="Delivery"
                                subTitle="Select Method"
                            />
                            <View style={cartStyle.divider}></View>
                            <CheckoutComponent
                                title="Payment"
                                subTitle="Select Method"
                            />
                            <View style={cartStyle.divider}></View>
                            <CheckoutComponent
                                title="Promo Code"
                                subTitle="Pick discount"
                            />
                            <View style={cartStyle.divider}></View>
                            <CheckoutComponent
                                title="Total Cost"
                                subTitle="$13.97"
                            />
                            <View style={cartStyle.divider}></View>
                            <Text style={{
                                fontFamily: 'Gilroy-Medium',
                                fontSize: 14,
                                marginTop: 10,
                                marginHorizontal: 16
                            }} > By placing an order you agree to our
                                Terms And Conditions</Text>
                            <AppButton
                                onPressHandler={() => {
                                   goToCheckOutScreen()
                                 }}
                                title="Place Order"
                            />
                        </View>
                    </BottomSheetModal>
                </View>
        </BottomSheetModalProvider>
    )
}

const cartStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : 'white',
        marginBottom: 60,
    },
    header: {
        fontSize: 20,
        alignSelf: 'center',
        fontFamily: 'Gilroy-Bold',
        padding: 20,
        color: '#181725'
    },
    border: {
        width: '100%',
        borderColor: 'rgba(226, 226, 226, 1)',
        borderWidth: 1

    },
    product_name: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 20,
        alignItems: 'center'
    },
    price: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 16,
        marginTop: 20,
        alignItems: 'center'
    },
    price_text: {
        fontSize: 14,
        fontFamily: 'Gilroy-Bold',
        color: 'black',

    },
    qty_text: {
        padding: 12,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E2E2E2',
        margin: 8,
        fontFamily: 'Gilroy-Bold',
        color: 'black'
    },
    divider: {
        width: '90%',
        borderWidth: 0.8,
        borderColor: '#E2E2E2B2',
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 12,
    },
    img: {
        flex: 0.3,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    bottomcontainer: {
        backgroundColor: 'white',
    }

});

export default CartScreen;