import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CheckIn = () => {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [checkInTime, setCheckInTime] = useState(null);
  const [checkOutTime, setCheckOutTime] = useState(null);
  const [clockedDuration, setClockedDuration] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1000); // Update every second

    return () => clearInterval(timer);
  }, []);

  const onCheckInOut = () => {
    if (isCheckedIn) {
      // If already checked in, set check-out time
      setCheckOutTime(Math.floor(currentTime / 1000)); // Convert milliseconds to seconds
      // Calculate duration
      const durationInSeconds = checkOutTime - checkInTime;
      setClockedDuration(formatDuration(durationInSeconds));
    } else {
      // If not checked in, set check-in time
      setCheckInTime(Math.floor(currentTime / 1000)); // Convert milliseconds to seconds
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
      <View style={styles.imageContainer}>
        <Image
          source={require('/Users/akshajjoshi/AJROOT/AggieHouse/AggieHouse/frontend/assets/WebP Image.png')}
          style={styles.image}
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
          {isCheckedIn ? `Checked In at ${new Date(checkInTime * 1000).toLocaleTimeString()}` : `Checked Out at ${new Date(checkOutTime * 1000).toLocaleTimeString()}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(220, 204, 192)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200, // Increase the size of the image
    height: 200, // Increase the size of the image
    resizeMode: 'cover',
    borderRadius: 100, // Keep the circle size the same
    marginBottom: 20,
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
    backgroundColor: '#954535', // Brownish background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkedInButton: {
    backgroundColor: 'green',
  },
  checkedText: {
    marginTop: 10,
    fontSize: 16,
    color: '#954535', // Default text color
    textAlign: 'center',
  },
  checkedInText: {
    color: 'green', // Text color when checked in
  },
});

export default CheckIn;
