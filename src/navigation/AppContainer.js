import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  HomeScreen  from '../screens/HomeScreen';
import  SplashScreen from '../screens/SplashScreen';

const AppContainer = () => {

    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='SplashScreen'
            >
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
            </Stack.Navigator>
        </NavigationContainer>
    )

}

export default AppContainer;