import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import MessageItem from './MessageItem'; // Make sure this path matches the file location

const MessageList = ({ messages, currentUser }) => {
  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='handled' // Prevent the keyboard from dismissing when tapping a message
    >
      {messages.map((message, index) => (
        <MessageItem key={message.id || index} message={message} currentUser={currentUser} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
  },
});

export default MessageList;