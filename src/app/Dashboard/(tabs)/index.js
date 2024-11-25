import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Dashboard = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcomeText}>Welcome to Your Dashboard</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f8ff', 
        padding: 20,
    },
    welcomeText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 10,
    },
});

export default Dashboard;
