import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

const App = (_) => (
    <View style={styles.container}>
        <Text>Hello, world!</Text>
    </View>
);

export default App;
