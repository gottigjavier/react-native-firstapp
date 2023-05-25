import React from "react";
import { View, Text, ViewPropTypes, StyleSheet} from 'react-native';
import Constants from 'expo-constants';


const AppBar = () => {
    return (
        <View style= {styles.container}>
            <Text style= {styles.text}>
                Repositories
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#24292e',
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10
    },
    text: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default AppBar;