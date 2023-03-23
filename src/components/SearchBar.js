import React from "react";
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchBar = (props) => {
    return (
        <View style={SearchBarStyle.container}>
            <Icon
                name='search'
                size={20}
                color='#181B19'
                style={SearchBarStyle.iconstyle} />
            <TextInput
                value={props.search}
                onChangeText={props.setSearch}
                placeholder={props.placeholder}
                style={SearchBarStyle.search}
            />
        </View>
    )
}

const SearchBarStyle = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#F2F3F2',
        alignItems: 'center',
        borderRadius: 12,
        marginTop: 20,
        marginHorizontal : 20
    },
    search: {
        fontFamily: 'Gilroy-Medium',
        fontSize: 16,
        marginStart: 8,
        width: '80%',
        alignItems: 'center'
    },
    iconstyle: {
        marginLeft: 16,

    }
})

export default SearchBar;