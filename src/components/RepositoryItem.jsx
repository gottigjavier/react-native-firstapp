import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import RepositoryStats from './RepositoryStats';
import RepositoryItemHead from './RepositoryItemHeader';

const RepositoryItem = (props) => (
    <View key={props.id} style={styles.container}>
        <RepositoryItemHead {...props} />
        <RepositoryStats {...props}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingBottom: 5,
        paddingTop: 5
    },
    title: {
        color: '#09f',
        fontWeight: 'bold',
        marginBottom: 5
    },
    subtitle: {
        fontWeight: 'bold',
        margin: 2
    },
    language: {
        color: '#fff',
        backgroundColor: '#06f',
        padding: 3,
        alignSelf: 'flex-start',
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: 48,
        height: 48,
        borderRadius: 4
    }
});

export default RepositoryItem;