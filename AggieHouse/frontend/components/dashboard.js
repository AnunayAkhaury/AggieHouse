import React, { useEffect, useState } from 'react';
import { StatusBar, Image, SafeAreaView, Text, TouchableOpacity, View, Dimensions, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { AntDesign } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';
import { Picker } from '@react-native-picker/picker';

const volunteerHoursData = {
  Virginia: [5, 8, 7, 6, 8, 4, 2],
  Akshaj: [3, 7, 4, 6, 5, 2, 3],
  Ayush: [2, 4, 3, 2, 1, 5, 4],
  Anunay: [6, 5, 7, 4, 5, 7, 6],
  Sanjith: [1, 2, 1, 3, 4, 2, 3],
};

const fetchVolunteerHoursMock = (volunteerName) => {
  return new Promise(resolve => {
    setTimeout(() => {
      const hours = volunteerHoursData[volunteerName];
      resolve([
        { date: 'Mon', hours: hours[0] },
        { date: 'Tue', hours: hours[1] },
        { date: 'Wed', hours: hours[2] },
        { date: 'Thu', hours: hours[3] },
        { date: 'Fri', hours: hours[4] },
        { date: 'Sat', hours: hours[5] },
        { date: 'Sun', hours: hours[6] }
      ]);
    }, 500);
  });
};

const AdminDashboard = () => {
  const [hoursData, setHoursData] = useState([]);
  const [selectedVolunteer, setSelectedVolunteer] = useState('Virginia');
  const screenWidth = Dimensions.get("window").width;

  useEffect(() => {
    fetchVolunteerHoursMock(selectedVolunteer).then(data => {
      setHoursData(data);
    });
  }, [selectedVolunteer]);

  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  };

  const data = {
    labels: hoursData.map(day => day.date),
    datasets: [{
      data: hoursData.map(day => day.hours)
    }]
  };

  return (
    <View style={tw`flex-1 bg-gray-100`}>
      <StatusBar style="auto" />
      <SafeAreaView style={tw`flex-1 relative`}>
        <Image
          source={require("/Users/ayushmajumdar/AggieHouse/AggieHouse/frontend/assets/house.jpeg")}
          style={tw`absolute top-0 w-full h-40 opacity-60`}
        />

        <View style={tw`w-full px-3`}>
          <TouchableOpacity
            onPress={() => {/* Implement navigation back function here */}}
            activeOpacity={0.7}
            style={tw`h-[3rem] w-[3rem] bg-gray-200 rounded-full items-center justify-center mt-4`}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>

          <Text style={tw`text-[2.5rem] font-medium text-center mt-10`}>
            Admin Dashboard
          </Text>

          <Text style={tw`text-xl font-semibold text-center mt-2`}>
            Volunteer Hours
          </Text>

          {hoursData.length > 0 ? (
            <View style={tw`mt-3`}>
              <BarChart
                data={data}
                width={screenWidth - 30}
                height={200}
                yAxisLabel=""
                chartConfig={chartConfig}
                verticalLabelRotation={30}
                fromZero={true}
                style={{ marginLeft: 0 }}
              />
            </View>
          ) : (
            <Text style={tw`mt-3 text-center`}>Loading chart...</Text>
          )}

          <Text style={tw`mt-4 text-base font-normal`}>Select Volunteer:</Text>
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
        </View>
      </SafeAreaView>
    </View>
  );
};

// Define StyleSheet for additional styling
const styles = StyleSheet.create({
  pickerContainer: {
    height: 150, // Adjust this height to fit your design
    justifyContent: 'center',
  },
  picker: {
    width: '100%',
    alignSelf: 'center',
  },
  pickerItem: {
    height: 150, // Adjust this height to fit your design
  },
});

export default AdminDashboard;
