import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import images from '../resources/imagesLocation'

const HomeScreen = ({navigation}) => {

    return (
        <View>
            <ImageBackground
                source={images.bg_image}
                style = {Style.ImageBackground}
            />
            
            <Text>
                HomeScreen
            </Text>
        </View>
    )


}

const Style = StyleSheet.create({
    ImageBackground: {
        flex : 1 ,
        resizeMode: "cover",
        width: "100%",
        alignItems: "center",
    }
});

export default HomeScreen;