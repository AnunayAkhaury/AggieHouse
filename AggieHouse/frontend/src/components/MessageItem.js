import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const MessageItem = ({ message, currentUser }) => {
  const isCurrentUser = currentUser?.uid === message?.userId;

  // Define styles based on the sender
  const messageContainerStyle = [
    styles.messageContainer,
    isCurrentUser ? styles.currentUserContainer : styles.otherUserContainer,
  ];

  const messageBubbleStyle = [
    styles.messageBubble,
    isCurrentUser ? styles.currentUserBubble : styles.otherUserBubble,
  ];

  return (
    <View style={messageContainerStyle}>
      <View style={messageBubbleStyle}>
        <Text style={styles.messageText}>{message?.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row',
    marginVertical: 7, // Slightly increased for more space between messages
    paddingHorizontal: 10,
  },
  currentUserContainer: {
    justifyContent: 'flex-end',
  },
  otherUserContainer: {
    justifyContent: 'flex-start',
  },
  messageBubble: {
    borderRadius: 20,
    paddingVertical: 12, // Increased padding for bigger bubbles
    paddingHorizontal: 16, // Increased padding for wider bubbles
    maxWidth: wp('80%'), // Allow the bubble to be a little wider
    marginHorizontal: 4, // Add horizontal margin for aesthetics
  },
  currentUserBubble: {
    backgroundColor: '#a68b6d',
    marginLeft: 'auto',
  },
  otherUserBubble: {
    backgroundColor: '#e0d3c3',
    marginRight: 'auto',
  },
  messageText: {
    fontSize: 18, // Slightly larger font size for better readability
  },
});

export default MessageItem;
