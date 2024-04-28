import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

const Task = ({ text, completed, onToggle }) => {
  return (
    <View style={styles.item}>
      <Switch
        trackColor={{ false: "rgb(220, 204, 192)", true: "rgb(84, 84, 84)" }}
        thumbColor={completed ? "rgb(220, 204, 192)" : "white"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onToggle}
        value={completed}
      />
      <Text style={[styles.itemText, completed && styles.completed]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Task;