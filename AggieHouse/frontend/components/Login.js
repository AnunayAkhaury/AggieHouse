import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base'; // Assuming both Input and Button are imported from @rneui/base

const Login = () => {
  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar style="auto" />
      <SafeAreaView style={tw`flex-1 relative`}>
        <Image
          source={require("/Users/ayushmajumdar/AggieHouse/AggieHouse/frontend/assets/house.jpeg")}
          style={tw`absolute bottom-0`}
        />
        
        <View style={tw`w-full h-full z-50 px-4 justify-between`}>
          <TouchableOpacity activeOpacity={0.7} style={tw`h-[3rem] w-[3rem] bg-gray-200 rounded-full items-center justify-center self-start mt-4`}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          
          <View>
            <Text style={tw`text-[2.5rem] font-medium`}>
              Welcome Back
            </Text>
            <Text style={tw`text-[1.1rem] text-gray-700`}>
              Enter Your Username & Password
            </Text>
          </View>

          <View>
            <Input
              containerStyle={tw`w-full my-4`}
              inputContainerStyle={tw`py-2`}
              placeholder="Username"
              keyboardType='default'
            />

            <Input
              containerStyle={tw`w-full my-4`}
              inputContainerStyle={tw`py-2`}
              placeholder="Password"
              keyboardType='default'
              secureTextEntry={true}
            />

            <Button
              title="LOGIN"
              buttonStyle={tw`rounded-lg py-3 w-full mt-4 bg-black text-white`}
            />

            <Text style={tw`mt-4 text-center text-gray-600`}>Forgotten Password</Text>
            <Text style={tw`mt-4 text-center text-gray-600`}>Or Create a New Account</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Login;
