import React, { useState } from 'react';
import { StatusBar, Image, SafeAreaView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import { doc, setDoc, getFirestore } from 'firebase/firestore';
import house from '../../../frontend/assets/images/house.jpeg'; // Make sure this path is correct

const Signup = () => {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const db = getFirestore(); // Ensure you initialize Firestore correctly
  const navigation = useNavigation();

  const handleSignUp = async () => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user;
      console.log('Registered with:', user.email);
      navigation.replace("CheckIn");
      // Set additional user info in Firestore
      await setDoc(doc(db, "users", user.uid), {
        userName: userName,
        email: email,
        phoneNumber: phoneNumber,
        userId: user.uid
      });

    } catch (error) {
      console.error('Signup Error:', error);
      alert(error.message);
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar style="auto" />
      <SafeAreaView style={tw`flex-1 relative`}>
        <Image
          source={house}
          style={tw`absolute bottom-0 w-full h-full opacity-50`}
          resizeMode="cover"
        />

        <View style={[tw`w-full h-full px-4 justify-between`, styles.overlay]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <Text style={tw`text-4xl font-medium text-center mt-8 text-white`}>
            Welcome to GeoNest!
          </Text>
          <Text style={tw`text-xl text-gray-300 text-center`}>
            Make your account
          </Text>

          <View style={tw`mt-4`}>
            <Input
              value={userName}
              onChangeText={setUserName}
              containerStyle={tw`w-full`}
              inputContainerStyle={tw`bg-white rounded-lg py-3 px-4`}
              inputStyle={tw`text-base`}
              placeholder="User Name"
              keyboardType='default'
              autoCapitalize="none"
            />

            <Input
              value={email}
              onChangeText={setEmail}
              containerStyle={tw`w-full mt-4`}
              inputContainerStyle={tw`bg-white rounded-lg py-3 px-4`}
              inputStyle={tw`text-base`}
              placeholder="Email"
              keyboardType='email-address'
              autoCapitalize="none"
            />

            <Input
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              containerStyle={tw`w-full mt-4`}
              inputContainerStyle={tw`bg-white rounded-lg py-3 px-4`}
              inputStyle={tw`text-base`}
              placeholder="Phone Number"
              keyboardType='phone-pad'
            />

            <Input
              value={password}
              onChangeText={setPassword}
              containerStyle={tw`w-full mt-4`}
              inputContainerStyle={tw`bg-white rounded-lg py-3 px-4`}
              inputStyle={tw`text-base`}
              placeholder="Password"
              secureTextEntry={true}
              autoCapitalize="none"
            />
          </View>

          <Button
            title="SIGN UP"
            onPress={handleSignUp}
            buttonStyle={tw`rounded-lg py-3 w-full mt-8 bg-black`}
            titleStyle={tw`text-white`}
          />

          <View style={tw`mb-8`} />
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adds a dark overlay to ensure text readability
  },
  backButton: {
    alignSelf: 'start',
    marginTop: 10,
    marginLeft: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
  }
});

export default Signup;