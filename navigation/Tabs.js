import React, { useEffect, useLayoutEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import Favs from '../screens/Favs';

const Tabs = createMaterialBottomTabNavigator();
const getHeaderName = route => {
  console.log(route.state.routeNames[route.state.index] || 'Movies');
  return route?.state?.routeNames[route.state.index] || 'Movies';
};

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: getHeaderName(route)
    });
  }, [route]);

  return (
    <Tabs.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tabs.Screen
        options={{ tabBarColor: '#2e2465' }}
        name="Movies"
        component={Movies}
      />
      <Tabs.Screen
        options={{ tabBarColor: '#4e2465' }}
        name="TV"
        component={Tv}
      />
      <Tabs.Screen
        options={{ tabBarColor: '#5e2465' }}
        name="Search"
        component={Search}
      />
      <Tabs.Screen
        options={{ tabBarColor: '#6e2465' }}
        name="Favorites"
        component={Favs}
      />
    </Tabs.Navigator>
  );
};
