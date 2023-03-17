import { ImageBackground, StyleSheet, Text, View, StatusBar } from 'react-native';
import { TouchableOpacity,Image} from 'react-native';
import images from '../resources/imagesLocation';
import AppContainer from '../navigation/AppContainer';


const HomeScreen = ({ navigation }) => {

    return (
        <View style={
            {
                flex: 1,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
            }
        }>
            <ImageBackground
                source={images.bg_image}
                style={HomeStyle.ImageBackground} >

                <StatusBar hidden={true} />
                <View style = {HomeStyle.welcome}> 

                <Image 
                source={images.app_icon} />

                <Text style={HomeStyle.textStyle}>
                    Welcome{'\n'}
                    <Text style={{
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>to our store</Text>
                </Text>

                <Text style={{
                    color: '#FCFCFCB2',
                    fontSize : 14,
                    letterSpacing : 1.2
                    }}>
                    Get your groceries in as fast as one hour
                </Text>
            <TouchableOpacity
                onPress={ () => {
                    navigation.navigate('SignInScreen')
                }}
            >
                <View 
                style = {{
                    width : 350,
                    padding : 16,
                    backgroundColor : '#53B175',
                    borderRadius : 10,
                    marginTop : 20,
                    alignItems : 'center'

                }}>
                    <Text
                    style = {{
                        color : 'white',
                        fontSize : 20,
                        fontFamily : 'Gilroy-Bold'
                    }}> 
                    Get Started
                    </Text>

                </View>

            </TouchableOpacity>

                </View>
            </ImageBackground>
        </View>
    )


}

const HomeStyle = StyleSheet.create({
    ImageBackground: {
        flex: 1,
        width: "100%",
        resizeMode: "cover",
        alignItems: "center",
    },
    textStyle: {
        fontSize: 36,
        color: 'white',
        letterSpacing: 1.2,
        fontFamily: 'Gilroy-Bold',
        padding: 5,
    },
    welcome : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'flex-end',
        marginBottom : 66
    }
});

export default HomeScreen;