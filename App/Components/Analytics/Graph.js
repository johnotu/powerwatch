/**
 * PowerWatch
 * https://github.com/johnotu/powerwatch
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { LineChart } from 'react-native-charts-wrapper';

export default class Graph extends Component {
  render() {
    return (
      <View style={styles.graph}>
        <Text>Graph</Text>
        <LineChart style={styles.chart}
          data={{dataSets: [{label: "demo", values: [{y: 1}, {y: 2}, {y: 1}]}]}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  graph: {
    backgroundColor: 'blue',
    flex: 3,
    //height: 50,
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  chart: {
    flex: 1
  }
});
