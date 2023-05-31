import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuizApp from './src';
import Playground from './src/Playground';
import { StatusBar } from 'expo-status-bar';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
       screenOptions={{
          headerStyle: {
            backgroundColor: '#6A5BE2', // Ubah warna navigation tab di sini
          },
          headerTintColor: '#fff', // Ubah warna teks navigation tab di sini
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name='QuizApp' component={QuizApp}/>
        <Stack.Screen name='Playground' component={Playground}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

