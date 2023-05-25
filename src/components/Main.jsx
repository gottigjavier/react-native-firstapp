import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <RepositoryList />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default Main;