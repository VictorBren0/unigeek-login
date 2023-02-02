import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Drawer//
import Home from '../../screens/UserScreens/Home';







const Drawer = createDrawerNavigator();

export default function MyDrawer({navigation}) {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#3D0128',

      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        
      },
    }}>
      <Drawer.Screen 
      name="Home" 
      component={Home}
      options={{ title: 'Inicio' }} 
      />
    </Drawer.Navigator>
  );
}


