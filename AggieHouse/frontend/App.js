import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditProfilePage from './components/EditProfilePage.js';
import CheckIn from './components/CheckIn.js';
import Feedback from './components/Feedback.js';
import ResidentFeedbackForm from './components/ResidentFeedbackForm.js';





export default function App() {
  return (
    <View style={styles.container}>
      <ResidentFeedbackForm/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
