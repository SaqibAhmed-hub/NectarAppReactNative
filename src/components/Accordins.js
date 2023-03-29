import React, { useState } from "react";
import { StyleSheet, View ,TouchableOpacity,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


const Accordins = ({ children, title }) => {


    const [expanded, setExpanded] = useState(false);

    function toggleItem() {
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