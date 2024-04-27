import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Modal, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditProfilePage = () => {
  const onSaveChanges = () => {
    // Logic for saving changes goes here
  };


  return (
    <View style={styles.container}>
      <Text style={styles.editProfileText}>Edit Profile</Text>

      <View style={styles.profilePicture}>
        <Icon name="user" size={60} color="black" />
      </View>

      <Text style={styles.editPictureText}>Edit Picture</Text>

      <View style={styles.divider}></View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Name</Text>
        <TextInput style={styles.input} placeholder="Name" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Pronouns</Text>
        <TextInput style={styles.input} placeholder="Pronouns" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput style={styles.input} placeholder="Email" />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Phone</Text>
        <TextInput style={styles.input} placeholder="Phone Number" />
      </View>

      <TouchableOpacity onPress={onSaveChanges} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>

      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(220, 204, 192)',
    justifyContent: 'flex-start', // Align content at the top
    alignItems: 'center',
    paddingTop: 60, // Add padding to the top
  },
  divider: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
  editProfileText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(149, 69, 53, 0.7)',
    justifyContent: 'center', // Center content vertically
    alignItems: 'center',
    borderRadius: 50,
    marginTop: 13,
    marginBottom: 10,
  },
  editPictureText: {
    fontSize: 16,
    color: '#954535', 
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '94%',
    marginBottom: 5,
    marginTop: 20,
    marginRight: 10,
  },
  inputLabel: {
    width: '20%',
    marginLeft: 7,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#954535',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 18,
    marginTop: 30,
    borderColor: 'white',
    borderWidth: 1,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  //848484

});

export default EditProfilePage;
