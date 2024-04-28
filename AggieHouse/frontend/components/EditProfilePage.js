import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditProfilePage = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    pronouns: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (field, value) => {
    setProfileData({ ...profileData, [field]: value });
  };

  const onSaveChanges = () => {
    // Logic for saving changes goes here
    console.log('Saving changes:', profileData);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.editProfileText}>Your Profile</Text>

      <View style={styles.profilePicture}>
        <Icon name="user" size={60} color="#954535" />
      </View>

      <Text style={styles.editPictureText}>Edit Picture</Text>

      <View style={styles.divider}></View>

      <LabeledInput label="Name" value={profileData.name} onChangeText={(text) => handleInputChange('name', text)} />
      <LabeledInput label="Pronouns" value={profileData.pronouns} onChangeText={(text) => handleInputChange('pronouns', text)} />
      <LabeledInput label="Email" value={profileData.email} onChangeText={(text) => handleInputChange('email', text)} />
      <LabeledInput label="Phone Number" value={profileData.phone} onChangeText={(text) => handleInputChange('phone', text)} />

      <TouchableOpacity onPress={onSaveChanges} style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const LabeledInput = ({ label, value, onChangeText }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={`Enter ${label}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(220, 204, 192)',
    alignItems: 'center', // Center content horizontally
    paddingHorizontal: 10, // Add horizontal padding
    paddingTop: 80, 
  },

  divider: {
    width: '100%',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    marginBottom: 20, // Add some space after the divider
  },

  editProfileText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  profilePicture: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  editPictureText: {
    fontSize: 16,
    color: '#954535', // Blue color
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginleft:10,

  },

  inputLabel: {
    width: 100,
    marginRight: 1,
    fontSize: 16,
  },

  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '9%',
  },

  saveButton: {
    backgroundColor: '#954535',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginTop: 35,
  },

  saveButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfilePage;
