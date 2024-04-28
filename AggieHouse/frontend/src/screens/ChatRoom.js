import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { getRoomId } from '../utils/utils';
import { useRoute } from '@react-navigation/core';
import { Timestamp, setDoc, doc, addDoc, collection } from 'firebase/firestore';
import {db} from '../../firebase';
import { useRef } from 'react';
const ChatRoom = () => {
    const route = useRoute();
    const OtherUserId  = route.params.chatId;
    const { user, loading } = useAuth();
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const textRef = useRef('');
    useEffect(() => {
        if (!loading && user) {
            createRoomIfNotExists();
            
        }
    }, [loading, user]);

    const createRoomIfNotExists = async () => {
       let roomId = getRoomId(user?.uid, OtherUserId);
       await setDoc(doc(db, "rooms", roomId), {
        roomId,
        createdAt: Timestamp.now().fromDate(new Date())
    });
}
    const handleSendMessage = async () => {
        const trimmedMessage = inputText.trim();
        if(!trimmedMessage) return;
        try{
            let roomId = getRoomId(user?.uid, OtherUserId);
            const docRef = doc(db, "rooms", roomId);
            const messagesRef = collection(docRef, 'messages');
            const newDoc = await addDoc(messagesRef, {
                userId: user?.uid,
                text: trimmedMessage,
                email: user?.email,
                createdAt:  Timestamp.now()
            });
            console.log('Message sent with ID:', newDoc.id);
            
        }catch(error) {
            Alert.alert('Error sending message:', error);
            console.error('Error sending message:', error);
        }
    }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Chatroom</Text>
        {/* Add header icons and info here */}
      </View>
      <ScrollView style={styles.messageContainer}>
        {/* You'll map through your messages here and determine the alignment based on the sender */}
        <View style={styles.messageBubble}>
          <Text style={styles.messageText}>That’s very nice place! You guys made a very good decision.</Text>
        </View>
        <View style={[styles.messageBubble, styles.messageBubbleRight]}>
          <Text style={styles.messageText}>Can't wait to go on vacation!</Text>
        </View>
        {/* Add more messages here */}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.inputContainer}>
        <TextInput
         value={inputText}
         onChangeText={setInputText}
          placeholder="Write a message..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  messageContainer: {
    flex: 1,
  },
  messageBubble: {
    backgroundColor: '#e1e5ea',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    marginLeft: 15,
    alignSelf: 'flex-start',
  },
  messageBubbleRight: {
    alignSelf: 'flex-end',
    backgroundColor: '#007bff',
    marginRight: 15,
  },
  messageText: {
    color: 'black',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
  },
  sendButton: {
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
  },
});

export default ChatRoom;
