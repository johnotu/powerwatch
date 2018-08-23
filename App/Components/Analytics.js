/**
 * PowerWatch
 * https://github.com/johnotu/powerwatch
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';
import Today from './Analytics/Tabs/Today';
import Week from './Analytics/Tabs/Week';
import Month from './Analytics/Tabs/Month';
import Year from './Analytics/Tabs/Year';

const AnalyticsStack = createMaterialTopTabNavigator({
  Today: Today,
  Week: Week,
  Month: Month,
  Year: Year
}, {
    initialRouteName: "Today"
  }
);

module.exports = AnalyticsStack;
