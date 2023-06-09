import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Screen1} from '../screens/Screen1';
import {Screen2} from '../screens/Screen2';
import {Screen3} from '../screens/Screen3';
import {PersonScreen} from '../screens/PersonScreen';

export type RootStackParams = {
  screen1: undefined;
  screen2: undefined;
  screen3: undefined;
  personScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

// Para estilizar el navigator stack podemos usar el objeto de ScreenOptions
// Ademas, cada Screen tiene su propio objeto de opciones
export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyle: {
          backgroundColor: 'white',
        },
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen
        name="screen1"
        options={{title: 'Screen 1'}}
        component={Screen1}
      />
      <Stack.Screen
        name="screen2"
        options={{title: 'Screen 2'}}
        component={Screen2}
      />
      <Stack.Screen
        name="screen3"
        options={{title: 'Screen 3'}}
        component={Screen3}
      />
      <Stack.Screen
        name="personScreen"
        options={{title: 'Person Screen'}}
        component={PersonScreen}
      />
    </Stack.Navigator>
  );
};
