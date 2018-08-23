/**
 * PowerWatch
 * https://github.com/johnotu/powerwatch
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import Graph from '../Graph';
import Figures from '../Figures';
import Tips from '../Tips';

export default class Today extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Graph />
        <Figures />
        <Tips />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    //alignItems: "center",
    //backgroundColor: "#F5FCFF"
  }
});
