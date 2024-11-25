import React from 'react';
import {Stack} from 'expo-router';

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false}}>
            <Stack.Screen name= 'index' />
            <Stack.Screen name= 'register' />
            <Stack.Screen name= 'recover' />
        </Stack>
    );
}

export default Layout;
