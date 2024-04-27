import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';

const Signup = () => {
  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar style="auto" />
      <SafeAreaView style={tw`flex-1 relative`}>
        <Image
          source={require("/Users/ayushmajumdar/AggieHouse/AggieHouse/frontend/assets/house.jpeg")}
          style={tw`absolute bottom-0 w-full`}
        />

        <View style={tw`w-full h-full z-50 px-4 justify-between`}>
          <TouchableOpacity activeOpacity={0.7} style={tw`h-[3rem] w-[3rem] bg-gray-200 rounded-full items-center justify-center self-start mt-4`}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <Text style={tw`text-[2.5rem] font-medium text-center mt-8`}>
            Welcome to GeoNest!
          </Text>
          <Text style={tw`text-[1.1rem] text-gray-700 text-center`}>
            Make your account
          </Text>

          <Input
            containerStyle={tw`w-full mt-4`}
            inputContainerStyle={tw`py-2`}
            placeholder="Email"
            keyboardType='email-address'
            autoCapitalize="none"
          />

          <Input
            containerStyle={tw`w-full mt-4`}
            inputContainerStyle={tw`py-2`}
            placeholder="Phone Number"
            keyboardType='phone-pad'
          />

          <Input
            containerStyle={tw`w-full mt-4`}
            inputContainerStyle={tw`py-2`}
            placeholder="Password"
            secureTextEntry={true}
            autoCapitalize="none"
          />

          <Button
            title="SIGN UP"
            buttonStyle={tw`rounded-lg py-3 w-full mt-4 bg-black text-white`}
          />

          <View style={tw`mb-8`} />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Signup;
