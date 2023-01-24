import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens//
//ScreensInital//
import InitialScreen from '../../screens/SetScreens/InitialScreen'
import Login from '../../screens/SetScreens/Login'
import Register from '../../screens/SetScreens/Register'
import ForgotPassword from '../../screens/SetScreens/ForgotPassword'
import NewPassword from '../../screens/SetScreens/NewPassord'
import Home from '../../screens/UserScreens/Home';
import Drawer from './Drawer'



//Screens ADM//


//Screens Users//



const {Navigator, Screen} = createNativeStackNavigator();

export default function Stack({navigation}) {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="InitialScreen" component={InitialScreen} />
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
      <Screen name="ForgotPassword" component={ForgotPassword} />
      <Screen name="NewPassword" component={NewPassword} />
      <Screen name="Drawer" component={Drawer} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
