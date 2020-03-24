import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

const Tabs = createMaterialBottomTabNavigator();

export default ({ route }) => {
  console.log(route);
  return (
    <Tabs.Navigator
      initialRouteName="Moives"
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tabs.Screen
        options={{ tabBarLabel: 'Movies', tabBarColor: '#2e2465' }}
        name="Movies"
        component={Movies}
      />
      <Tabs.Screen
        options={{ tabBarLabel: 'TV', tabBarColor: '#4e2465' }}
        name="Tv"
        component={Tv}
      />
      <Tabs.Screen
        options={{ tabBarColor: '#5e2465' }}
        name="Search"
        component={Search}
      />
      <Tabs.Screen
        options={{ tabBarColor: '#6e2465' }}
        name="Favs"
        component={Favs}
      />
    </Tabs.Navigator>
  );
};
