import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens//
import InitialScreen from '../screens/InitialScreen'
import Login from '../screens/Login'
import Register from '../screens/Register'
import ForgotPassword from '../screens/ForgotPassword'
import NewPassword from '../screens/NewPassword'


const {Navigator, Screen} = createNativeStackNavigator();

export default function Stack({navigation}) {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="InitialScreen" component={InitialScreen} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="NewPassword" component={NewPassword} />
    </Navigator>
  );
}
