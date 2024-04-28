
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import StartPage from './src/screens/StartPage';
import SignUp from './src/screens/SignUp';
import ChatHeader from './src/components/ChatHeader';
import ChatPage from './src/screens/ChatPage';
import ChatRoom from './src/screens/ChatRoom';
import CheckIn from './src/screens/CheckIn';
import TasksPage from './src/screens/TasksPage';
import ChatbotUI from './src/screens/ChatBotUI';
import DashBoard from './src/screens/DashBoard';
import TrainingPage from './src/screens/TrainingPage';
import ShiftLog from './src/screens/ShiftLog';
import ProfileTab from './src/screens/ProfileTab';
import EditProfilePage from './src/screens/EditProfile';
import RedFeed from './src/screens/RedFeed';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="StartPage" component={StartPage} />
        <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
        <Stack.Screen  options={{ headerShown: false }}  name="Home" component={HomeScreen} />
        <Stack.Screen  options={{ headerShown: false }}  name="SignUp" component={SignUp} />
        <Stack.Screen  options={{ headerShown: false }}  name="ChatPage" component={ChatPage} />
        <Stack.Screen  options={{ headerShown: false }}  name="ChatRoom" component={ChatRoom} />
        <Stack.Screen  options={{ headerShown: false }}  name="CheckIn" component={CheckIn} />
        <Stack.Screen  options={{ headerShown: false }}  name="TasksPage" component={TasksPage} />
        <Stack.Screen  options={{ headerShown: false }}  name="ChatbotUI" component={ChatbotUI} />
        <Stack.Screen  options={{ headerShown: false }}  name="DashBoard" component={DashBoard} />
        <Stack.Screen  options={{ headerShown: false }}  name="TrainingPage" component={TrainingPage} />
        <Stack.Screen  options={{ headerShown: false }}  name="ShiftLog" component={ShiftLog} />
        <Stack.Screen  options={{ headerShown: false }}  name="ProfileTab" component={ProfileTab} />
        <Stack.Screen  options={{ headerShown: false }}  name="EditProfilePage" component={EditProfilePage} />
        <Stack.Screen  options={{ headerShown: false }}  name="RedFeed" component={RedFeed} />


       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
