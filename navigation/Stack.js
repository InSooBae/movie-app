import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from '../screens/Detail';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';
const Stack = createStackNavigator();

export const a = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1e2465',
        borderBottomColor: '#1e2465',
        shadowColor: '#1e2465'
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false
    }}
  >
    <Stack.Screen name="Movies" component={Movies} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
);
export const b = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#3e2465',
        borderBottomColor: '#3e2465',
        shadowColor: '#3e2465'
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false
    }}
  >
    <Stack.Screen name="TV" component={Tv} />
  </Stack.Navigator>
);
export const c = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#4e2465',
        borderBottomColor: '#4e2465',
        shadowColor: '#4e2465'
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false
    }}
  >
    <Stack.Screen name="Search" component={Search} />
  </Stack.Navigator>
);
export const d = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#9e2465',
        borderBottomColor: '#9e2465',
        shadowColor: '#9e2465'
      },
      headerTintColor: 'white',
      headerBackTitleVisible: false
    }}
  >
    <Stack.Screen name="Favorites" component={Favs} />
  </Stack.Navigator>
);