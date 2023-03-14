import React from 'react';
import { Alert, View } from 'react-native';
import AuthForm from '../Auth/AuthForm';
import auth from '@react-native-firebase/auth';

const Login = ({ navigation }) => {

    const onSignInHandler = ({ email, password }) => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('User account created & signed in!');
            })
            .catch(error => {
                Alert.alert("Error", error.code);
            });
       }
    return (
        <View>
            <AuthForm isLogin handler={onSignInHandler} />
        </View>
    );
}

export default Login;
