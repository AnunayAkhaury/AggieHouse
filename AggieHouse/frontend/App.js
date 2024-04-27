import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EditProfilePage from './components/EditProfilePage.js';


export default function App() {
  return (
    <View style={styles.container}>
      <EditProfilePage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
