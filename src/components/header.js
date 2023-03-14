import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View style={styles.header}>
            <Text>Products</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        marginBottom: 8
    }
});
export default Header;
