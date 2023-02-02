import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

//Drawer//
import Map from '../../screens/MapScreens/Map';









const DrawerMap = createDrawerNavigator();

export default function MyDrawerMap({navigation}) {
  return (
    <DrawerMap.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#3D0128',

      },
      headerTintColor: '#FFFFFF',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        
      },
    }}>
      <DrawerMap.Screen 
      name="Map" 
      component={Map}
      options={{ title: 'Mapa' }} 
      />
    </DrawerMap.Navigator>
  );
}


