import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountScreen from './bottoms/accountScreen';
import CartScreen from './bottoms/cartScreen';
import ExploreScreen from './bottoms/exploreScreen';
import FavouriteScreen from './bottoms/favouriteScreen';
import ShopScreen from './bottoms/shopScreen';
import color from '../utils/color';


const DashBoardScreen = ({ navigation }) => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            initialRouteName='shopScreen'
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: color.base,
                tabBarInactiveTintColor: color.inactiveColor,
                tabBarShowLabel: true,
                tabBarAllowFontScaling: true,
                tabBarStyle: {
                    position: 'absolute',
                    height: 56,
                    borderRadius: 8,
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontFamily: 'Gilroy-Medium'
                }
            })}
        >
            <Tab.Screen
                name="shopScreen"
                component={ShopScreen}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return <Entypo name="shop" size={size} color={color} />
                    },
                    headerShown: false,
                    tabBarLabel: 'Shop',


                }}
            />
            <Tab.Screen
                name="exploreScreen"
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return <MaterialCommunityIcons name="text-search" size={size} color={color} />
                    },
                    headerShown: false,
                    tabBarLabel: 'Explore'
                }}
            />
            <Tab.Screen
                name="cartScreen"
                component={CartScreen}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return <Feather name="shopping-cart" size={size} color={color} />
                    },
                    headerShown: false,
                    tabBarLabel: 'Cart'
                }}
            />
            <Tab.Screen
                name="favouriteScreen"
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return <Entypo name="heart-outlined" size={size} color={color} />
                    },
                    headerShown: false,
                    tabBarLabel: 'Favourite'
                }}
            />
            <Tab.Screen
                name="accountScreen"
                component={AccountScreen}
                options={{
                    tabBarIcon: ({ size, color }) => {
                        return <FontAwesome name="user-o" size={size} color={color} />
                    },
                    headerShown: false,
                    tabBarLabel: 'Account'
                }}
            />
        </Tab.Navigator>
    )
}

export default DashBoardScreen;