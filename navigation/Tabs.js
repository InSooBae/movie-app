import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { a, b, c, d } from './Stack';

const Tabs = createMaterialBottomTabNavigator();

export default () => {
  return (
    <Tabs.Navigator
      activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
      initialRouteName="TV"
    >
      <Tabs.Screen
        options={{
          tabBarColor: '#1e2465',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-film' : 'md-film'}
              color={focused ? 'white' : 'grey'}
              size={26}
            />
          )
        }}
        name="Movies"
        component={a}
      />
      <Tabs.Screen
        options={{
          tabBarColor: '#3e2465',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-tv' : 'md-tv'}
              color={focused ? 'white' : 'grey'}
              size={26}
            />
          )
        }}
        name="TV"
        component={b}
      />
      <Tabs.Screen
        options={{
          tabBarColor: '#4e2465',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
              color={focused ? 'white' : 'grey'}
              size={26}
            />
          )
        }}
        name="Search"
        component={c}
      />
      <Tabs.Screen
        options={{
          tabBarColor: '#be2465',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-heart' : 'md-heart'}
              color={focused ? 'white' : 'grey'}
              size={26}
            />
          )
        }}
        name="Discovery"
        component={d}
      />
    </Tabs.Navigator>
  );
};
