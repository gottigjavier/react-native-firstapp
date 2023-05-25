import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const parseThousands = value => {
    return value >= 1000
        ? `${Math.round(value / 100) / 10}k`
        : String(value)
}

const RepositoryStats = props => (
    <View style={[styles.countValues, {flexDirection: 'row', justifyContent: 'space-around'}]}>
        <View>
            <Text style={styles.countTitle}>{parseThousands(props.forksCount)}</Text>
            <Text>Forks</Text>
        </View>
        <View>
            <Text style={styles.countTitle}>{parseThousands(props.stargazersCount)}</Text>
            <Text>Stars</Text>
        </View>
        <View>
            <Text style={styles.countTitle}>{parseThousands(props.reviewCount)}</Text>
            <Text>Review</Text>
        </View>
        <View>
            <Text style={styles.countTitle}>{parseThousands(props.ratingAverage)}</Text>
            <Text>Rating</Text>
        </View>
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
    countTitle: {
        fontWeight: 'bold',
        marginBottom: 2
    },
    countValues: {
        textAlign: 'center'
    }
});

export default RepositoryStats;