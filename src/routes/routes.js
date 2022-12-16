import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Stack from './stacks/stackMain';
import StackAdm from './stacks/stackAdm';
import UserStack from './stacks/stackUser';

export default function () {
  const auth = true
  return (
      <NavigationContainer>
        <Stack>
          {auth ? <UserStack/> : <StackAdm/>}
        </Stack>
      </NavigationContainer>
  );
}
