import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const ChatItem = ({ item, noBorder, navigation }) => {
    console.log("ChatItem item:", item);
  return (
    <TouchableOpacity onPress={() => {
            navigation.navigate('ChatRoom', { chatId: item.userId }); // Make sure 'Login' is the correct screen name in your navigator
    }} // Add navigation logic here
        style={[
          styles.container,
          noBorder ? null : styles.border
        ]}
    >
        <Image 
            source={require('../../assets/images/icon.png')}
            style={styles.profileImage}
        />
        <View style={styles.details}>
            <View style={styles.row}>
                <Text style={styles.name}>{item.userName}</Text>
                <Text style={styles.time}>12:34 PM</Text> 
            </View>
            <Text style={styles.lastMessage}>hello how are you?</Text>
        </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 12,
      paddingHorizontal: 20,
      backgroundColor: 'white', // Match background to your theme
    },
    border: {
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#E8E8E8',
    },
    profileImage: {
      width: 50, // Smaller size for the avatar
      height: 50,
      borderRadius: 25, // Circular image
      marginRight: 12,
    },
    details: {
      flex: 1,
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000', // Darker font color for better readability
    },
    time: {
      fontSize: 14,
      color: '#B2B2B2', // Light grey for timestamp
    },
    lastMessage: {
      fontSize: 14,
      color: '#B2B2B2', // Light grey for message preview
      marginTop: 2, // Slight space between name and message
    },
  });

export default ChatItem;
