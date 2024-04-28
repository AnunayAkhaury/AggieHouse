// BackButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const BackButton = ({ targetScreen, style }) => {
    const navigation = useNavigation();
  
    return (
      <TouchableOpacity onPress={() => navigation.navigate(targetScreen)} style={[styles.button, style]}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#dddddd',
      borderRadius: 5,
      margin: 10,
    },
    text: {
      marginLeft: 5,
      fontSize: 16,
      color: 'black',
    },
  });
  
  export default BackButton;