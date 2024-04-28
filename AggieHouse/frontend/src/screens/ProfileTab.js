import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { Input, Button } from '@rneui/base';
import house from '../../../frontend/assets/images/house.jpeg';
import CustomNavBar from '../components/CustomNavBar';


const ProfileTab = ({navigation}) => {
 const onProfileEditClick = () => {
   navigation.navigate('EditProfilePage'); // Make sure 'Login' is the correct screen name in your navigator
};
const onFeedBackClick = () => {
 navigation.navigate('RedFeed'); // Make sure 'Login' is the correct screen name in your navigator
};
const onTrainingClick = () => {
 navigation.navigate('TrainingPage'); // Make sure 'Login' is the correct screen name in your navigator
};
const onShiftClick = () => {
 navigation.navigate('ShiftLog'); // Make sure 'Login' is the correct screen name in your navigator
};

const onCalenderClick = () => {
  navigation.navigate('Calendar');
};
const onDashClick = () => {
  navigation.navigate('DashBoard'); // Make sure 'Login' is the correct screen name in your navigator
 };
return (
  <View style={tw`flex-1 bg-[rgb(220,204,192)]`}>
    <StatusBar style="auto" />
    <SafeAreaView style={tw`flex-1 relative`}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
      <View style={tw`mt-4 items-center`}>
        <View style={tw`w-32 h-32 bg-white rounded-full items-center justify-center border-4 border-gray-300`}>
          <AntDesign name="user" size={60} color="black" />
        </View>
        <Text style={tw`text-2xl font-medium mt-4`}>
          Gunrock
        </Text>
        <Text style={tw`text-gray-700`}>
          aggiehousedavis@ucdavis.edu
        </Text>
      </View>
      <Button
        title="Edit Profile"
        onPress={onProfileEditClick}
        buttonStyle={tw`rounded-lg py-3 w-11/12 self-center mt-4 bg-[#954535] text-white`}
      />
      <Button
        title="FeedBack"
        onPress={onFeedBackClick}
        buttonStyle={tw`rounded-lg py-3 w-11/12 self-center mt-4 bg-gray-200`}
        titleStyle={tw`text-black`}
      />
      <Button
        title="Training"
        onPress={onTrainingClick}
        buttonStyle={tw`rounded-lg py-3 w-11/12 self-center mt-4 bg-gray-200`}
        titleStyle={tw`text-black`}
      />
      <Button
        title="Shifts"
        onPress={onShiftClick}
        buttonStyle={tw`rounded-lg py-3 w-11/12 self-center mt-4 bg-gray-200`}
        titleStyle={tw`text-black`}
      />
      <Button
        title="Calender"
        onPress={onCalenderClick}
        buttonStyle={tw`rounded-lg py-3 w-11/12 self-center mt-4 bg-gray-200`}
        titleStyle={tw`text-black`}
      />
      <Button
        title="DashBoard"
        onPress={onDashClick}
        buttonStyle={tw`rounded-lg py-3 w-11/12 self-center mt-4 bg-gray-200`}
        titleStyle={tw`text-black`}
      />
      <View style={tw`mb-8`} />
    </SafeAreaView>
    <CustomNavBar navigation={navigation} />
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
export default ProfileTab;
