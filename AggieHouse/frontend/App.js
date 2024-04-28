import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StartPage from './components/StartPage';
import TasksPage from './components/TasksPage';

export default function App() {
  return (
    <View style={styles.container}>
      <TasksPage/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 18, 
    fontWeight: 'bold',
  },
});
