import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Task from '../components/Tasks';
import { AntDesign } from '@expo/vector-icons';

const TasksPage = ({navigation}) => {
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

  const name = 'John Doe'; // Example user name
  const currentDate = new Date().toLocaleDateString();

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
      <Text style={styles.title}>Tasks for {name} on {currentDate}</Text>
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
          placeholder="Write a personal task"
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
    marginTop: 20,
    color: 'rgb(84, 84, 84)',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
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
  backButton: {
    alignSelf: 'start',
    marginTop: 10,
    marginLeft: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
  }
});

export default TasksPage;