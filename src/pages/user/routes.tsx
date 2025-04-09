import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../login';
import Register from '../login/list';
import User from './index';

const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}
