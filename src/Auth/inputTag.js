import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Colors } from '../constants/styles';


const InputTag = ({
    label,
    keyboardType,
    onUpdateValue,
    secure = false,
    value }) => {
    return (
        <View style={styles.inputContainer}>
            <Text style={[styles.label, styles.labelInvalid]}>{label}</Text>
            <TextInput
                style={[styles.input]}
                autoCapitalize={false}
                keyboardType={keyboardType}
                secureTextEntry={secure}
                onChangeText={onUpdateValue}
                value={value} />
        </View>
    )
}

export default InputTag;

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: 'white',
        marginBottom: 4,
    },
    labelInvalid: {
        color: Colors.error500,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Colors.primary100,
        borderRadius: 4,
        fontSize: 16,
    },
    inputInvalid: {
        backgroundColor: Colors.error100,
    },
});
