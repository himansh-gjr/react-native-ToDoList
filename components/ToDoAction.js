import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ToDoAction({ task, onChange, onPress }) {
  return (
    <>
      <TextInput
        onChangeText={onChange}
        value={task}
        style={styles.textInput}
        placeholder="type your task here"
      />
      <TouchableOpacity onPress={onPress}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="plus" size={24} color="#E8EAED" />
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    width: "80%",
    margin: 5,
    height: 50,
    padding: 10,
  },
  iconContainer: {
    backgroundColor: "#55BCF6",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ToDoAction;
