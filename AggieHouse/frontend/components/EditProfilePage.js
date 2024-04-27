import React from 'react';
import { View, Text, StyleSheet, TextInput, Picker } from 'react-native';

const EditProfilePage = () => {
    const [selectedRole, setSelectedRole] = React.useState('Volunteer'); // Default selected role
    

    return (
        <View style={styles.container}>
          <Text style={styles.editProfileText}>Edit Profile</Text>


          <View style={styles.profilePicture}></View>

          <Text style={styles.editPictureText}>Edit Picture</Text>

          <View style={styles.divider}></View>

          <TextInput
            style={styles.input}
            placeholder="Name"
          />

          <TextInput
            style={styles.input}
            placeholder="Email"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
          />

        </View>
    );
  }
  
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
      backgroundColor: 'lightgray',
      borderRadius: 50,
      marginTop:13,
      marginBottom:10,

    },
    editPictureText: {
      fontSize: 16,
      color: '#007AFF', // Blue color
      marginBottom:20,
    },

    input: {
        width: '95%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 18,
        marginBottom: 10,
        paddingHorizontal: 10,
      },

      picker: {
        width: '80%',
        height: 40,
        marginBottom: 20,
      },

});

export default EditProfilePage;
