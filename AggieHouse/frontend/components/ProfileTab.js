import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';

const ProfileTab = () => {
  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar style="auto" />
      <SafeAreaView style={tw`flex-1 relative`}>
        <Image
          source={require("/Users/ayushmajumdar/AggieHouse/AggieHouse/frontend/assets/house.jpeg")}
          style={tw`absolute top-0 w-full h-40 opacity-60`}
        />

        <View style={tw`w-full h-full z-50 px-4 justify-between`}>
          <TouchableOpacity activeOpacity={0.7} style={tw`h-[3rem] w-[3rem] bg-gray-200 rounded-full items-center justify-center self-start mt-4`}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <View style={tw`mt-16 items-center`}>
            <Image
              source={require("/Users/ayushmajumdar/AggieHouse/AggieHouse/frontend/assets/user_avatar.png")}
              style={tw`w-32 h-32 rounded-full border-4 border-white`}
            />
            <Text style={tw`text-2xl font-medium mt-4`}>
              John Doe
            </Text>
            <Text style={tw`text-gray-700`}>
              johndoe@example.com
            </Text>
          </View>

          <Button
            title="Edit Profile"
            buttonStyle={tw`rounded-lg py-3 w-full mt-4 bg-black text-white`}
          />

          <Button
            title="Change Password"
            buttonStyle={tw`rounded-lg py-3 w-full mt-4 bg-gray-200`}
            titleStyle={tw`text-black`}
          />

          <Button
            title="Settings"
            buttonStyle={tw`rounded-lg py-3 w-full mt-4 bg-gray-200`}
            titleStyle={tw`text-black`}
          />

          <View style={tw`mb-8`} />
        </View>
      </SafeAreaView>
    </View>
  );
}

export default ProfileTab;
