import React, { useEffect, useState } from 'react';
import { StatusBar, Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';
import house from '../../../frontend/assets/images/house.jpeg';
import BackButton from '../components/BackButton'; // Import the BackButton component

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();  // Ensures auth is initialized with the Firebase app configuration
  const navigation = useNavigation();

  const onBackClick = () => {
    navigation.navigate('StartPage'); // Make sure 'Login' is the correct screen name in your navigator
};

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("ProfileTab");
      }
    });
    return () => unsubscribe(); // Corrected to ensure the unsubscribe function is properly returned for cleanup
  }, [auth, navigation]); // Added dependencies for useEffect

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message));
  };

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar style="auto" />
      <SafeAreaView style={tw`flex-1 relative`}>
        <Image
          source={house}  // Change the path to your actual image
          style={tw`absolute bottom-0 w-full h-1/2`}
        />

        <View style={tw`w-full h-full z-50 px-4 justify-between`}>
          <TouchableOpacity onPress={onBackClick} activeOpacity={0.7} style={tw`h-[3rem] w-[3rem] bg-gray-200 rounded-full items-center justify-center self-start mt-4`}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          
          <View>
            <Text style={tw`text-5xl font-medium`}>
              Welcome Back
            </Text>
            <Text style={tw`text-xl text-gray-700`}>
              Enter Your Email & Password
            </Text>
          </View>

          <View>
            <Input
              value={email}
              onChangeText={setEmail}
              containerStyle={tw`w-full my-4`}
              inputContainerStyle={tw`py-2`}
              placeholder="Email"
              keyboardType='email-address'
            />

            <Input
              value={password}
              onChangeText={setPassword}
              containerStyle={tw`w-full my-4`}
              inputContainerStyle={tw`py-2`}
              placeholder="Password"
              secureTextEntry={true}
            />

            <Button
              title="LOGIN"
              onPress={handleLogin}
              buttonStyle={tw`rounded-lg py-3 w-full mt-4 bg-black`}
              titleStyle={tw`text-white`}
            />


            <Text style={tw`mt-4 text-center text-gray-600`}>Forgotten Password</Text>
            <Text style={tw`mt-4 text-center text-gray-600`}>Or Create a New Account</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};


export default LoginScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     width: '80%'
//   },
//   input: {
//     backgroundColor: 'white',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   buttonContainer: {
//     width: '60%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   button: {
//     backgroundColor: '#0782F9',
//     width: '100%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonOutline: {
//     backgroundColor: 'white',
//     marginTop: 5,
//     borderColor: '#0782F9',
//     borderWidth: 2,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 16,
//   },
//   buttonOutlineText: {
//     color: '#0782F9',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// })
