import React from "react";
import { View, StyleSheet, Text } from "react-native";

function Task({ item }) {
  return (
    <View style={styles.container}>
      <View style={styles.square} />
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 15 }}>{item.task}</Text>
      </View>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
    height: 50,
    borderRadius: 5,
    padding: 10,
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: "#55BCF6",
    opacity: 0.4,
    borderRadius: 5,
  },
  circle: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
  },
  textContainer: {
    width: "80%",
  },
});

export default Task;
