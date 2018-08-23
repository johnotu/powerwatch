/**
 * PowerWatch
 * https://github.com/johnotu/powerwatch
 */

import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Tips extends Component {
  render() {
    return (
      <View style={styles.tips}>
        <Text>Tips</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tips: {
    backgroundColor: "blue",
    flex: 2,
    //height: 50,
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
