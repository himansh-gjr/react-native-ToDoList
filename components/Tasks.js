import React from "react";
import { FlatList, TouchableOpacity } from "react-native";

import Task from "./Task";

function Tasks({ tasks, handleRemoveTodo }) {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handleRemoveTodo(item)}>
          <Task item={item} />
        </TouchableOpacity>
      )}
    />
  );
}

export default Tasks;
