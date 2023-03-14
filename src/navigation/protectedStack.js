import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Button } from 'react-native';
import Home from '../components/home';
import ProductsDetails from '../components/productDetailsPage';
import auth from '@react-native-firebase/auth';


const Stack = createNativeStackNavigator();
const { Navigator, Screen } = Stack;

const ProtectedStack = () => {
    const logout = () => {
        auth()
            .signOut()
            .then(() => console.log('User signed out!'));

    };
    return (
        <Navigator initialRouteName='Home'>
            <Screen name="Home"
                component={Home}
                options={{ headerRight: () => <Button title="Logout" onPress={logout} /> }} />
            <Screen name="Details" component={ProductsDetails} />
        </Navigator>
    )
};
export default ProtectedStack;