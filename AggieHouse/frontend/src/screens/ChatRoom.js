import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useAuth } from '../hooks/useAuth';
import { getRoomId } from '../utils/utils';
import { useRoute } from '@react-navigation/core';
import { Timestamp, setDoc, doc, addDoc, collection, orderBy, queryEqual, query, onSnapshot, querySnapshot } from 'firebase/firestore';
import {db} from '../../firebase';
import { useRef } from 'react';
import MessageList from '../components/MessageList';
import ChatHeader from '../components/ChatHeader';
import { AntDesign } from '@expo/vector-icons';
let trimmedMessage = '';
const ChatRoom = ({navigation}) => {
    const route = useRoute();
    const OtherUserId  = route.params.chatId;
    const { user, loading } = useAuth();
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');
    const textRef = useRef('');
    const inputRef = useRef(null);
    useEffect(() => {
        
      if (user && OtherUserId && !loading) {
            createRoomIfNotExists();
            let roomId = getRoomId(user?.uid, OtherUserId);
            const docRef = doc(db, "rooms", roomId);
            const messagesRef = collection(docRef, 'messages');
            const q = query(messagesRef, orderBy('createdAt','asc'));
            let unsub = onSnapshot(q, (querySnapshot) => {
              let allData = querySnapshot.docs.map(doc =>{
                const data = doc.data();
              const id = doc.id;  // Capture the document ID
              return { id, ...data };
              });
              setMessages(allData);
              
            });
          
        return () => {
            unsub();
        };
      }
    }, [user, OtherUserId, loading, trimmedMessage]);

    const createRoomIfNotExists = async () => {
      console.log("entered roomifnotexists");
       let roomId = getRoomId(user?.uid, OtherUserId);
       await setDoc(doc(db, "rooms", roomId), {
        roomId,
        createdAt: Timestamp.now()
    });
}
    const handleSendMessage = async () => {
         trimmedMessage = inputText.trim();
        if(!trimmedMessage) return;
        try{
            let roomId = getRoomId(user?.uid, OtherUserId);
            const docRef = doc(db, "rooms", roomId);
            const messagesRef = collection(docRef, 'messages');
            setInputText('');
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
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        <ChatHeader />
          <View style={styles.header}>
              <Text style={styles.headerTitle}></Text>
          </View>
          <MessageList messages={messages} currentUser={user} />
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
      backgroundColor: '#f5f5f5', // A neutral off-white background
  },
  inputContainer: {
      flexDirection: 'row',
      padding: 10,
      alignItems: 'center',
      backgroundColor: '#ffffff',
      borderTopWidth: 1,
      borderTopColor: '#e0d3c3', // A soft brown to define the input area
  },
  input: {
      flex: 1,
      padding: 10,
      borderRadius: 20,
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#a68b6d', // Bordered input field with the brown theme
      marginRight: 10,
  },
  sendButton: {
      padding: 10,
      backgroundColor: '#5c4939', // A deeper brown for the send button
      borderRadius: 20,
  },
  sendButtonText: {
      color: '#fff',
  },
  backButton: {
    alignSelf: 'start',
    marginTop: 10,
    marginLeft: 10,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 25,
  }
});
export default ChatRoom;
