import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoardScreen from '../screens/DashboardScreen';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';
import SocialSignInScreen from '../screens/SocialSignInScreen';
import SplashScreen from '../screens/SplashScreen';
import OrderAccepted from '../screens/bottoms/orders/OrderAccepted';
import ProductDetailsScreen from '../screens/bottoms/shops/productdetails';
import LogInScreen from '../screens/login/LogInScreen';
import ProductListScreen from '../screens/bottoms/explore/productList';

const AppContainer = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='SplashScreen'>
                <Stack.Screen
                    name='SplashScreen'
                    component={SplashScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='HomeScreen'
                    component={HomeScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='SignInScreen'
                    component={SignInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='SocialSignInScreen'
                    component={SocialSignInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='LogInScreen'
                    component={LogInScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='DashBoardScreen'
                    component={DashBoardScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='ProductDetailsScreen'
                    component={ProductDetailsScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='OrderAccepted'
                    component={OrderAccepted}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='ProductListScreen'
                    component={ProductListScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppContainer;