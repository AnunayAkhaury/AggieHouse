import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Task from './Task'; // Make sure the path is correct based on your file structure

const TasksPage = () => {
  const [tasks, setTasks] = useState([
    { text: 'Build App', completed: false },
    { text: 'Impress Judges', completed: false },
    { text: 'Win Hackathon', completed: false },
  ]);
  const [textInput, setTextInput] = useState('');

  const handleAddTask = () => {
    if (textInput === '') return;
    setTasks([...tasks, { text: textInput, completed: false }]);
    setTextInput('');
  };

  const toggleSwitch = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item, index }) => (
          <Task
            text={item.text}
            completed={item.completed}
            onToggle={() => toggleSwitch(index)}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Write a task"
          value={textInput}
          onChangeText={setTextInput}
        />
        <TouchableOpacity onPress={handleAddTask} style={styles.addButton}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'rgb(84, 84, 84)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
    backgroundColor: 'rgb(220, 204, 192)',
    borderRadius: 25,
    marginRight: 10,
    borderWidth: 1,
    borderColor: 'rgb(84, 84, 84)',
    color: 'rgb(84, 84, 84)',
  },
  addButton: {
    width: 50,
    height: 50,
    backgroundColor: 'rgb(220, 204, 192)',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 24,
    color: 'rgb(84, 84, 84)',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgb(220, 204, 192)',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'rgb(84, 84, 84)',
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'rgb(84, 84, 84)',
  },
});

export default TasksPage;
