import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'; // You might need to use a different icon set based on the available icons.

// Importing your company logo
import AggieHouseIMG from '../../../frontend/assets/images/AggieHouseIMG.png';

const StartPage = ({navigation}) => {

  // Define navigation functions
  const onSignInWithGoogle = () => {
    // Implement Google Sign-In logic
  };

  const onSignInWithApple = () => {
    // Implement Apple Sign-In logic
  };

  const onCreateAccount = () => {
    navigation.navigate('SignUp'); // Make sure 'SignUp' is the correct screen name in your navigator
  };

  const onSignIn = () => {
    navigation.navigate('Login'); // Make sure 'Login' is the correct screen name in your navigator
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Image source={AggieHouseIMG} style={styles.logo} />
      <Text style={styles.title}>Explore now</Text>
      <Text style={styles.subtitle}>Join AggieHouse today.</Text>
      <View style={styles.socialButtonContainer}>
        <TouchableOpacity style={[styles.button, styles.socialButton]} onPress={onSignInWithGoogle}>
          <Icon name="google" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Sign up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.socialButton]} onPress={onSignInWithApple}>
          <Icon name="apple" style={styles.socialIcon} />
          <Text style={styles.socialButtonText}>Sign up with Apple</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={[styles.button, styles.createAccountButton]} onPress={onCreateAccount}>
        <Text style={styles.buttonText}>Create account</Text>
      </TouchableOpacity>
      <Text style={styles.prompt}>Already have an account?</Text>
      <TouchableOpacity style={[styles.button, styles.signInButton]} onPress={onSignIn}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(220,204,192)', // Your current design's background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 120, // Adjust according to your logo's aspect ratio
    height: 120, // Adjust according to your logo's aspect ratio
    resizeMode: 'contain', // Keeps the logo aspect ratio intact
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    color: '#333',
    marginBottom: 48,
  },
  socialButtonContainer: {
    width: '100%',
    marginBottom: 24,
  },
  button: {
    borderRadius: 24,
    paddingVertical: 12,
    paddingHorizontal: 32,
    width: '100%',
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButton: {
    backgroundColor: '#fff',
    elevation: 2,
  },
  socialIcon: {
    fontSize: 24,
    color: '#333', // Icon color similar to the text
    marginRight: 10,
  },
  createAccountButton: {
    backgroundColor: '#b69b8d', // A lighter brown as requested
  },
  signInButton: {
    backgroundColor: '#954435', // Your current design's sign in button color
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  socialButtonText: {
    color: '#333',
  },
  prompt: {
    fontSize: 16,
    color: '#333',
    marginBottom: 16,
  },
});

export default StartPage;
