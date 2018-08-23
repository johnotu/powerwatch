/**
 * PowerWatch
 * https://github.com/johnotu/powerwatch
 */

import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Account from './Account';
import AnalyticsStack from './Analytics';

class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'WATCH',
      headerRight: (
        <Button
          onPress={() => navigation.navigate("Account")}
          title='Account'
        />
      )
    };
  };
  render() {
    return (
      <AnalyticsStack />
    );
  }
}

export default DashboardStack = createStackNavigator({
  Dashboard: Dashboard,
  Account: Account
},
  {
    initialRouteName: "Dashboard"
  }
);