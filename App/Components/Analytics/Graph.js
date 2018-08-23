/**
 * PowerWatch
 * https://github.com/johnotu/powerwatch
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Graph extends Component {
  render() {
    return (
      <View style={styles.graph}>
        <Text>Graph</Text>
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
  figures: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
