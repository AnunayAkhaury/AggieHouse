import React, { useEffect, useState } from 'react';
import {
  StatusBar,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  StyleSheet
} from 'react-native';
import tw from 'twrnc';
import { Picker } from '@react-native-picker/picker';
import { AntDesign } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import house from '../../../frontend/assets/images/house.jpeg';

const volunteerHoursData = {
  Virginia: [5, 8, 7, 6, 8, 4, 2],
  Akshaj: [3, 7, 4, 6, 5, 2, 3],
  Ayush: [2, 4, 3, 2, 1, 5, 4], 
  Anunay: [6, 5, 7, 4, 5, 7, 6],
  Sanjith: [1, 2, 1, 3, 4, 2, 3],
};

const weeklyDataMocks = {
  Virginia: [20, 22, 18, 24],
  Akshaj: [15, 18, 20, 12],
  Ayush: [10, 12, 15, 11],
  Anunay: [25, 20, 22, 28],
  Sanjith: [8, 12, 10, 9],
};

const fetchVolunteerHoursMock = (volunteerName) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const hours = volunteerHoursData[volunteerName];
      const weeklyHours = weeklyDataMocks[volunteerName];
      resolve({
        daily: [
          { date: 'Mon', hours: hours[0] },
          { date: 'Tue', hours: hours[1] },
          { date: 'Wed', hours: hours[2] },
          { date: 'Thu', hours: hours[3] },
          { date: 'Fri', hours: hours[4] },
          { date: 'Sat', hours: hours[5] },
          { date: 'Sun', hours: hours[6] }
        ],
        weekly: weeklyHours
      });
    }, 500);
  });
};

const AdminDashboard = () => {
  const [hoursData, setHoursData] = useState([]);
  const [weeklyHoursData, setWeeklyHoursData] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState('Virginia');
  const [viewMode, setViewMode] = useState('Daily'); // 'Daily' or 'Weekly'
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    fetchVolunteerHoursMock(selectedVolunteer).then(data => {
      setHoursData(data.daily);
      setWeeklyHoursData(data.weekly);
    });
  }, [selectedVolunteer]);

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    barPercentage: 0.5,
  };

  const dailyData = {
    labels: hoursData.map(day => day.date),
    datasets: [{ data: hoursData.map(day => day.hours) }]
  };

  const weeklyLabels = ["4/01 - 4/07", "4/08 - 4/14", "4/15 - 4/21", "4/22 - 4/28"];
  const weeklyData = {
    labels: weeklyLabels,
    datasets: [{ data: weeklyHoursData }]
  };

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar style="auto" />
      <SafeAreaView style={tw`flex-1 relative`}>
        <Image source={house} style={tw`absolute top-0 w-full h-33 opacity-60`} />
        <View style={tw`w-full px-3`}>
          <TouchableOpacity onPress={() => {/* Implement navigation back function here */}} activeOpacity={0.7} style={tw`h-[3rem] w-[3rem] bg-gray-200 rounded-full items-center justify-center mt-4`}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text style={tw`text-[1.5rem] font-medium text-center mt-8`}>Admin Dashboard</Text>
          <Text style={tw`text-xl font-semibold text-center mt-5`}>{viewMode} Volunteer Hours for {selectedVolunteer}</Text>
          {viewMode === 'Daily' && hoursData.length > 0 && (
            <View style={tw`mt-5`}>
              <BarChart
                data={dailyData}
                width={screenWidth - 30}
                height={350}
                
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                fromZero={true}
                style={{ marginLeft: 2 }}
              />
            </View>
          )}
          {viewMode === 'Weekly' && weeklyHoursData.length > 0 && (
            <View style={tw`my-5`}>
              <BarChart
                data={weeklyData}
                width={screenWidth - 30}
                height={350}
             
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                fromZero={true}
                style={{ marginLeft:2 }}
              />
            </View>
          )}
          <Text style={tw`mt-2 text-base font-normal`}>Select Volunteer:</Text>
          <View style={[tw`mt-2 border border-gray-300 rounded`, styles.pickerContainer]}>
            <Picker
              selectedValue={selectedVolunteer}
              onValueChange={(itemValue, itemIndex) => {
                setSelectedVolunteer(itemValue);
              }}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              <Picker.Item label="Virginia" value="Virginia" />
              <Picker.Item label="Akshaj" value="Akshaj" />
              <Picker.Item label="Ayush" value="Ayush" />
              <Picker.Item label="Anunay" value="Anunay" />
              <Picker.Item label="Sanjith" value="Sanjith" />
            </Picker>
          </View>
          <Text style={tw`mt-2 text-base font-normal`}>View Mode:</Text>
          <View style={[tw`mt-2 border border-gray-300 rounded`, styles.pickerContainer]}>
            <Picker
              selectedValue={viewMode}
              onValueChange={(itemValue, itemIndex) => {
                setViewMode(itemValue);
              }}
              style={styles.picker}
              itemStyle={styles.pickerItem}
            >
              <Picker.Item label="Daily" value="Daily" />
              <Picker.Item label="Weekly" value="Weekly" />
            </Picker>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

// StyleSheet for additional styling
const styles = StyleSheet.create({
  pickerContainer: {
    height: 60, // Adjust this height to fit your design
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    alignSelf: 'center',
  },
  pickerItem: {
    height: 50, // Adjust this height to fit your design
  },
});

export default AdminDashboard;
