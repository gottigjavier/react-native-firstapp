import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


const RepositoryItemHead = props => (
    <View style={ styles.container }>
        <Image style={styles.image} source={{ uri: props.ownerAvatarUrl }} />
        <View style={{flex: 1}}>
            <Text style={styles.title}>{props.fullName}</Text>
            <Text style={styles.subtitle}>{props.description}</Text>
            <Text style={[styles.subtitle, styles.language]}>{props.language}</Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
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
        marginRight: 10,
        width: 48,
        height: 48,
        borderRadius: 4
    }
});

export default RepositoryItemHead;