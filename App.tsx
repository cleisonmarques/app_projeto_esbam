import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// App.tsx
import Routes from './src/pages/user/routes';


export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
