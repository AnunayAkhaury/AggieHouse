import React, { useState } from 'react';
import { StatusBar, Image, SafeAreaView, Text, View, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/core';
import house from '../../../frontend/assets/images/house.jpeg';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const navigation = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        navigation.replace("Home"); // Navigate to the Home screen after signup
      })
      .catch(error => {
        console.error('Signup Error:', error);
        alert(error.message);
      });
  };

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar style="auto" />
      <SafeAreaView style={tw`flex-1 relative`}>
        <Image
          source={house}
          style={tw`absolute bottom-0 w-full`}
        />

        <View style={tw`w-full h-full z-50 px-4 justify-between`}>
          <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={tw`h-[3rem] w-[3rem] bg-gray-200 rounded-full items-center justify-center self-start mt-4`}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <Text style={tw`text-4xl font-medium text-center mt-8`}>
            Welcome to GeoNest!
          </Text>
          <Text style={tw`text-xl text-gray-700 text-center`}>
            Make your account
          </Text>

          <Input
            value={email}
            onChangeText={setEmail}
            containerStyle={tw`w-full mt-4`}
            inputContainerStyle={tw`py-2`}
            placeholder="Email"
            keyboardType='email-address'
            autoCapitalize="none"
          />

          <Input
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            containerStyle={tw`w-full mt-4`}
            inputContainerStyle={tw`py-2`}
            placeholder="Phone Number"
            keyboardType='phone-pad'
          />

          <Input
            value={password}
            onChangeText={setPassword}
            containerStyle={tw`w-full mt-4`}
            inputContainerStyle={tw`py-2`}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
          />

          <Button
            title="SIGN UP"
            onPress={handleSignUp}
            buttonStyle={tw`rounded-lg py-3 w-full mt-4 bg-black text-white`}
          />

          <View style={tw`mb-8`} />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Signup;
