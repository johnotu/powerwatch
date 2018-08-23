/**
 * PowerWatch
 * https://github.com/johnotu/powerwatch
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Figures extends Component {
  render() {
    return (
      <View style={styles.figures}>
        <Text>Figures</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  figures: {
    backgroundColor: "blue",
    flex: 1,
    //height: 50,
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
