import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Location from 'expo-location';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomNavBar from '../components/CustomNavBar';
import checkInPic from '../../../frontend/assets/images/WebImage.png';

const CheckIn = ({ navigation }) => {
 const [isCheckedIn, setIsCheckedIn] = useState(false);
 const [checkInTime, setCheckInTime] = useState(null);
 const [checkOutTime, setCheckOutTime] = useState(null);
 const [clockedDuration, setClockedDuration] = useState(null);
 const [clockedDate, setClockedDate] = useState(null);
 const [isInProximity, setIsInProximity] = useState(false);


 useEffect(() => {
   const timer = setInterval(() => {
     if (isCheckedIn) {
       const newCurrentTime = Math.floor(new Date().getTime() / 1000);
       setClockedDuration(formatDuration(newCurrentTime - checkInTime));
     }
   }, 1000);


   return () => clearInterval(timer);
 }, [isCheckedIn, checkInTime]);


 const onCheckInOut = () => {
   if (!isInProximity) return; // Only allow check-in or check-out when in proximity


   const newCurrentTime = Math.floor(new Date().getTime() / 1000);
   if (isCheckedIn) {
     setClockedDuration(formatDuration(newCurrentTime - checkInTime));
     setCheckOutTime(newCurrentTime);
     setIsCheckedIn(false);
   } else {
     setCheckInTime(newCurrentTime);
     setClockedDuration(null);
     setClockedDate(new Date().toDateString());
     setIsCheckedIn(true);
   }
 };


 const formatDuration = (seconds) => {
   const hours = Math.floor(seconds / 3600);
   const minutes = Math.floor((seconds % 3600) / 60);
   const remainingSeconds = seconds % 60;
   return `${hours} hours, ${minutes} minutes, ${remainingSeconds} seconds`;
 };




 useEffect(() => {
   (async () => {
     let { status } = await Location.requestForegroundPermissionsAsync();
     if (status !== 'granted') {
       console.log("Location permission not granted");
       return;
     }


     const locationSubscription = await Location.watchPositionAsync({
       accuracy: Location.Accuracy.BestForNavigation,
       timeInterval: 5000
     }, (locationUpdate) => {
       const { latitude, longitude } = locationUpdate.coords;
       setIsInProximity(isCloseEnough(locationUpdate.coords, STATIC_LOCATION));
     });


     return () => {
       locationSubscription && locationSubscription.remove();
     };
   })();
 }, []);


 const STATIC_LOCATION = {
   latitude: 37.785834,
   longitude: -122.406417
 };


 const isCloseEnough = (currentCoords, targetCoords, tolerance = 0.0001) => {
   return (
     Math.abs(currentCoords.latitude - targetCoords.latitude) < tolerance &&
     Math.abs(currentCoords.longitude - targetCoords.longitude) < tolerance
   );
 };


 return (


   <View style={styles.containerBig}>
     <View style={styles.container}>
     <Text style={styles.title}>
       Aggie <Text style={styles.darkBrownText}>GeoNest</Text>
     </Text>
     <View style={styles.imageContainer}>
       <Image
         source={checkInPic}
         style={[styles.image, isCheckedIn && styles.checkedInImage]}
       />
     </View>
     <Text style={styles.heading}>Click Below</Text>
     <Text style={styles.subHeading}>
       Be sure to check in and check out when you enter and leave Aggie House!
     </Text>
     <View style={styles.buttonContainer}>
     </View>
       <TouchableOpacity onPress={onCheckInOut} style={[styles.checkInButton, isCheckedIn && styles.checkedInButton]}>
         <Text style={{ fontWeight: 'bold', color: 'white' }}>{isCheckedIn ? 'Checked In' : 'Check In'}</Text>
       </TouchableOpacity>
      
       <Text style={[styles.checkedText, isCheckedIn && styles.checkedInText]}>
         {isCheckedIn ? `Checked In at ${new Date(checkInTime * 1000).toLocaleTimeString()} on ${clockedDate}` : checkOutTime ? `Checked Out at ${new Date(checkOutTime * 1000).toLocaleTimeString()} on ${new Date(checkOutTime * 1000).toDateString()}` : ""}
       </Text>
       {!isCheckedIn && clockedDuration && <Text style={styles.checkedText}>Clocked in for {clockedDuration}</Text>}
     </View>
     <CustomNavBar navigation={navigation} style={styles.navBar}/>
   </View>
  
 );
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: 'rgb(220, 204, 192)',
   justifyContent: 'flex-start',
   alignItems: 'center',
   padding: 20,
 },
 containerBig: {
   flex: 1,
   backgroundColor: 'rgb(220, 204, 192)',
   justifyContent: 'flex-between',
   alignItems: 'center',
   // paddingTop: 20,
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
   // width: '80%',
   // marginHorizontal: 20,
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
 navBar: {
   marginTop: 'auto',
 }
});


export default CheckIn;