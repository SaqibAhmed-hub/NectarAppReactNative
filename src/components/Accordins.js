import React, { useState } from "react";
import { StyleSheet, View ,TouchableOpacity,Text ,UIManager, LayoutAnimation} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const Accordins = ({ children, title }) => {


    const [expanded, setExpanded] = useState(false);
    
    if(Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }

    function toggleItem() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
        setExpanded(!expanded);
    }


    const body = <View style={AccordinsStyle.accordBody}>{children}</View>;

    return (
        <View style={AccordinsStyle.container}>
            <TouchableOpacity style={AccordinsStyle.accordHeader} onPress={toggleItem}>
                <Text style={AccordinsStyle.accordTitle}>{title}</Text>
                <Icon name={expanded ? 'chevron-right' : 'chevron-down'}
                    size={20} color="#000" />
            </TouchableOpacity>
            {expanded && body}
        </View>
    )
}

const AccordinsStyle = StyleSheet.create({
    accordBody: {
        fontSize : 14,
        justifyContent : 'center',
        marginHorizontal : 16
    },
    container: {
        paddingBottom: 4,
        justifyContent : 'center'
    
    },
    accordHeader:{
        flexDirection: 'row',
        justifyContent:'space-between',
        padding :8,
        marginHorizontal : 8
    },
    accordTitle:{
        fontSize: 16,
        color : 'black',
        fontFamily : 'Gilroy-Bold'
    }
});

export default Accordins;