import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens//
//ScreensInital//
import InitialScreen from '../../screens/SetScreens/InitialScreen'



//Screens ADM//


//Screens Users//



const {Navigator, Screen} = createNativeStackNavigator();

export default function Stack({navigation}) {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="InitialScreen" component={InitialScreen} />
    </Navigator>
  );
}
