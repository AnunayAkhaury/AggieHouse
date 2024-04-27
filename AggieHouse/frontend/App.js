import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Input } from '@rneui/themed';
import { Button } from '@rneui/base';
import Login from './components/Login';
import Signup from './components/Signup';
import ProfileTab from './components/ProfileTab';
import Dashboard from './components/dashboard';
import AdminDashboard from './components/dashboard';
export default function App() {
  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <Dashboard />

    </View>
  );
}
