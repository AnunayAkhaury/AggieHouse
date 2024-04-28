import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckIn = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [clockedDuration, setClockedDuration] = useState(null);
  const [clockedDate, setClockedDate] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isCheckedIn) {
        // Update the duration every second while checked in
        const newCurrentTime = Math.floor(new Date().getTime() / 1000); // Convert milliseconds to seconds
        setClockedDuration(formatDuration(newCurrentTime - checkInTime));
      }
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, [isCheckedIn, checkInTime]);

  const onCheckInOut = () => {
    const newCurrentTime = Math.floor(new Date().getTime() / 1000); // Convert milliseconds to seconds

    if (isCheckedIn) {
      // Calculate duration and set check out time
      setClockedDuration(formatDuration(newCurrentTime - checkInTime));
      setCheckOutTime(newCurrentTime);
    } else {
      // Set check in time
      setCheckInTime(newCurrentTime);
      setClockedDuration(null); // Reset duration when checked in
      setClockedDate(new Date().toDateString()); // Set clocked date when checked in
    }

    setIsCheckedIn(!isCheckedIn);
  };

  const formatDuration = (seconds) => {
    // Convert seconds to hours, minutes, and remaining seconds
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Aggie <Text style={styles.darkBrownText}>GeoNest</Text>
      </Text>
      <View style={styles.imageContainer}>
        <Image
          source={require('/Users/akshajjoshi/AJROOT/AggieHouse/AggieHouse/frontend/assets/WebP Image.png')}
          style={[styles.image, isCheckedIn && styles.checkedInImage]}
        />
      </View>
      <Text style={styles.heading}>Check In</Text>
      <Text style={styles.subHeading}>
        Be sure to check in and check out when you enter and leave Aggie House!
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={onCheckInOut} style={[styles.checkInButton, isCheckedIn && styles.checkedInButton]}>
          <Icon name="home" size={40} color="white" />
        </TouchableOpacity>
        <Text style={[styles.checkedText, isCheckedIn && styles.checkedInText]}>
          {isCheckedIn ? `Checked In at ${new Date(checkInTime * 1000).toLocaleTimeString()} on ${clockedDate}` : checkOutTime ? `Checked Out at ${new Date(checkOutTime * 1000).toLocaleTimeString()} on ${new Date(checkOutTime * 1000).toDateString()}` : ""}
        </Text>
        {!isCheckedIn && clockedDuration && <Text style={styles.checkedText}>Clocked in for {clockedDuration}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(220, 204, 192)',
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 20, 
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 40, 
    marginTop: 80,
  },
  darkBrownText: {
    color: '#954535', 
  },
  imageContainer: {
    marginBottom: 20,
    shadowColor: '#954535',
    shadowOpacity: 0.27,
    shadowRadius: 15,
    elevation: 6,
  },
  image: {
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    marginBottom: 20,
    borderWidth: 5,
    borderColor: '#954535',
  },
  checkedInImage: {
    borderColor: 'green',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
    width: '80%',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  checkInButton: {
    width: 150,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#954535', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#954535',
    shadowOpacity: 0.5,
    shadowRadius: 45,
    elevation: 40,
  },
  checkedInButton: {
    backgroundColor: 'green',
    shadowColor: 'green',
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 3,
  },
  checkedText: {
    marginTop: 10,
    fontSize: 16,
    color: '#954535', 
    textAlign: 'center',
  },
  checkedInText: {
    color: 'green', 
  },
});

export default CheckIn;
