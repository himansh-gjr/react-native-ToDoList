import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Tasks from "./components/Tasks";
import ToDoAction from "./components/ToDoAction";

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
        <Tasks tasks={tasks} handleRemoveTodo={handleRemoveTodo} />
      </View>
      <View style={styles.downContainer}>
        <ToDoAction
          task={task}
          onChange={(text) => setTask(text)}
          onPress={handleAddTodo}
        />
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
});
