import React from 'react';
import { Alert, View } from 'react-native';
import AuthForm from '../Auth/AuthForm';
import auth from '@react-native-firebase/auth';

const SignUp = () => {

  const onSignUpHandler = ({ email, password }) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        Alert.alert("Error", error.code);
      });
  };

  return (
    <View>
      <AuthForm handler={onSignUpHandler} />
    </View>
  );
}

export default SignUp;
