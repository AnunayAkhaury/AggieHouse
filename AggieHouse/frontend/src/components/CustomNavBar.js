import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';


// You would import your icons from whichever library you're using, such as:
// import { IconName } from 'react-native-vector-icons/IconLibrary';


const windowWidth = Dimensions.get('window').width;
const CustomNavBar = ({ navigation }) => {
 return (
   <View style={styles.barContainer}>
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CheckIn')}>
       {/* Replace Text with Icon */}
       <Text style={styles.Text}>GeoNest</Text>
     </TouchableOpacity>
    
     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TasksPage')}>
       {/* Replace Text with Icon */}
       <Text style={styles.Text}>Tasks</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatPage')}>
       {/* Replace Text with Icon */}
       <Text style={styles.Text}>Chats</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatbotUI')}>
       {/* Replace Text with Icon */}
       <Text style={styles.Text}>Gunrock</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileTab')}>
       {/* Replace Text with Icon */}
       <Text style={styles.Text}>Profile</Text>
     </TouchableOpacity>
   </View>
 );
};


const styles = StyleSheet.create({
 barContainer: {
   flexDirection: 'row',
   justifyContent: 'space-around',
   alignItems: 'center',
   backgroundColor: '#954535',
   borderTopColor: 'rgba(0, 0, 0, 0.1)',
   paddingVertical: 40,
   paddingHorizontal: 20,
   width: windowWidth,
 },
 button: {
   alignItems: 'center',
   justifyContent: 'center',
   flex: 1,
 },
 middleButton: {
   top: -20,
   justifyContent: 'center',
   alignItems: 'center',
   width: 60,
   height: 60,
   borderRadius: 30,
   backgroundColor: 'red', // Customize color
   borderWidth: 2,
   borderColor: '#fff', // Customize border color
 },
 Text: {
   color: "rgb(220, 204, 192)",
   fontWeight: "bold",
   fontSize: 15,
 },   
 // ... Add other styles for icons and buttons here
});


export default CustomNavBar;
