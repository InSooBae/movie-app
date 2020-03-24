import React, { useEffect, useLayoutEffect } from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { a, b, c, d } from './Stack';

const Tabs = createMaterialBottomTabNavigator();
const getHeaderName = route =>
  route?.state?.routeNames[route.state.index] || 'Movies';

export default ({ navigation, route }) => {
  console.log(navigation, route);
  return (
    <Tabs.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
    >
      <Tabs.Screen
        options={{ tabBarColor: '#2e2465' }}
        name="Movies"
        component={a}
      />
      <Tabs.Screen
        options={{ tabBarColor: '#3e2465' }}
        name="TV"
        component={b}
      />
      <Tabs.Screen
        options={{ tabBarColor: '#4e2465' }}
        name="Search"
        component={c}
      />
      <Tabs.Screen
        options={{ tabBarColor: '#5e2465' }}
        name="Favorites"
        component={d}
      />
    </Tabs.Navigator>
  );
};
