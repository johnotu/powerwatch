/**
 * PowerWatch
 * https://github.com/johnotu/powerwatch
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from 'react-navigation';
import Today from './AnalyticsTab/Today';
import Week from './AnalyticsTab/Week';
import Month from './AnalyticsTab/Month';
import Year from './AnalyticsTab/Year';

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
