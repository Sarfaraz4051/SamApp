import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import InputTag from './inputTag';

const AuthForm = ({ isLogin, handler }) => {
    const navigation = useNavigation();

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

    const changeFields = {
        'email': setEnteredEmail,
        'confirmEmail': setEnteredConfirmEmail,
        'password': setEnteredPassword,
        'confirmPassword': setEnteredConfirmPassword
    };

    const onChangeField = (key, e) => {
        changeFields[key](e);
    };
    const changePage = () => {
        const page = isLogin ? 'SignUp' : 'Login';
        navigation.navigate(`${page}`);
    };
    const onHandler = () => {
        if (isLogin) {
            handler({
                email: enteredEmail,
                password: enteredPassword
            });
        } else {
            if (enteredEmail === enteredConfirmEmail && enteredPassword === enteredPassword) {
                handler({
                    email: enteredEmail,
                    password: enteredPassword
                });
            } else {
                alert("Invalid Data");
            }
        }
    };

    return (
        <View style={styles.container}>
            <InputTag
                label="Email"
                onUpdateValue={(e) => onChangeField('email', e)}
                keyboardType="email-address"
                value={enteredEmail}
            />
            {!isLogin && (<InputTag
                label="Confirm Email"
                onUpdateValue={(e) => onChangeField('confirmEmail', e)}
                keyboardType="email-address"
                value={enteredConfirmEmail}
            />)}
            <InputTag
                label="Password"
                onUpdateValue={(e) => onChangeField('password', e)}
                secure
                value={enteredPassword}
            />
            {!isLogin && (<InputTag
                label="Confirm Password"
                onUpdateValue={(e) => onChangeField('confirmPassword', e)}
                secure
                value={enteredConfirmPassword}
            />)}
            <View>
                <Button
                    title={isLogin ? 'Log In' : 'Sign Up'}
                    onPress={onHandler} />
                <Button
                    title={isLogin ? "Don't you have an account? SignUp" : 'Already have account? Login'}
                    onPress={changePage} />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default AuthForm;
