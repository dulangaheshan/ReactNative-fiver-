import React, { Component } from 'react';

import 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/Recucers";

import Home from "./src/Components/Home";
import Table from "./src/Components/Table";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import IconWithBadge from './src/Components/common/IconWithBadge'


const MainNavigator  = createBottomTabNavigator({
    Home : Home,
    Table: Table,
    // Table : {screen : Table}
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
          IconComponent = Table;
        } else if (routeName === 'Table') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        }
  
        // You can return any component that you like here!
        return <IconWithBadge name={iconName} size={25} color={tintColor}  badgeCount={3} />;
        // return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
  
  ) 
  
//   export default createAppContainer(MainNavigator);

export default MainNavigator;