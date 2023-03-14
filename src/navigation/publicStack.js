import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Login from '../components/login';
import SignUp from '../components/signUp';

const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

const PublicStack = () => (
    <Navigator initialRouteName='Login' >
        <Screen name="Login" component={Login} />
        <Screen name="SignUp" component={SignUp} />
    </Navigator>
);
export default PublicStack;