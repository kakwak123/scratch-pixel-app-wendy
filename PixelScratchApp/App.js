import React from 'react';
import { View, StyleSheet } from 'react-native';
import Amplify from 'aws-amplify';
import config from './aws-exports'; // Importing the Amplify configuration
import PixelatedImage from './PixelatedImage'; // Importing the PixelatedImage component

Amplify.configure(config);

export default function App() {
    return (
        <View style={styles.container}>
            <PixelatedImage />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});