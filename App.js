import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleAddTodo = () => {
    const tasksLength = tasks.length + 1;
    setTasks([...tasks, { task, id: tasksLength }]);
    setTask("");
  };

  const handleRemoveTodo = (item) => {
    setTasks(tasks.filter((taskItem) => taskItem.id !== item.id));
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 20 }}>
        <Text style={styles.text}>Your Tasks</Text>
      </View>
      <View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Task item={item} onPress={() => handleRemoveTodo(item)} />
          )}
        />
      </View>
      <View style={styles.downContainer}>
        <TextInput
          onChangeText={(text) => setTask(text)}
          value={task}
          style={styles.textInput}
          placeholder="type your task here"
        />
        <TouchableOpacity onPress={handleAddTodo}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons name="plus" size={24} color="#E8EAED" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    backgroundColor: "#E8EAED",
    flex: 1,
  },
  iconContainer: {
    backgroundColor: "#55BCF6",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
    fontStyle: "italic",
  },
  downContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    position: "absolute",
    bottom: 0,
    backgroundColor: "grey",
  },
  textInput: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    width: "80%",
    margin: 5,
    height: 50,
    padding: 10,
  },
});
