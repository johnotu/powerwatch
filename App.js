/**
 * PowerWatch
 * https://github.com/johnotu/powerwatch
 */

import React, { Component } from 'react';
import { createStackNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import Dashboard from "./App/Components/Dashboard";
import Account from "./App/Components/Account";

export default class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

const RootStack = createStackNavigator({
  Dashboard: Dashboard,
  Account: Account
},
  {
  initialRouteName: "Dashboard"
});