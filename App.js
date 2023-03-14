import { NavigationContainer } from '@react-navigation/native';
import ProtectedStack from './src/navigation/protectedStack';
import PublicStack from './src/navigation/publicStack';
import React, { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

const App = () => {

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <ProtectedStack /> : <PublicStack />}
    </NavigationContainer>
  );
};

export default App;
