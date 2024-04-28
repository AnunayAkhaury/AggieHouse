import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import axios from 'axios';
import data from '../utils/data.json';
import { API_KEY } from '@env';
import CustomNavBar from '../components/CustomNavBar';




const standardizeText = text => text.toLowerCase().replace(/[^\w\s]/g, '');


const ChatbotUI = ({ navigation }) => {
 const [input, setInput] = useState('');
 const [messages, setMessages] = useState([
   { role: 'bot', content: 'Hi! I am Gunrock, your personal Aggie House Assistant. How can I help you today?' }
 ]);


 const getClosestMatch = prompt => {
   let highestScore = 0;
   let closestEntry = null;
   const standardizedPrompt = standardizeText(prompt);
    data.forEach(entry => {
     const standardizedEntryPrompt = standardizeText(entry.prompt);
     const promptWords = standardizedEntryPrompt.split(/\s+/);
     const userWords = standardizedPrompt.split(/\s+/);
     const commonWords = userWords.filter(word => promptWords.includes(word)).length;
     const score = commonWords / promptWords.length;
     if (score > highestScore) {
       highestScore = score;
       closestEntry = entry;
     }
   });
    return highestScore > 0.5 ? closestEntry : null;
 };


 const fetchFromOpenAI = async (prompt) => {
   try {
     const response = await axios.post('https://api.openai.com/v1/chat/completions', {
       model: "gpt-3.5-turbo-0125",
       messages: [{ role: 'user', content: prompt }],
       max_tokens: 150
     }, {
       headers: {
         'Authorization': `Bearer ${API_KEY}`,
         'Content-Type': 'application/json'
       }
     });
     return response.data.choices[0].message.content;
   } catch (error) {
     console.error("Error connecting to OpenAI:", error);
     return "Sorry, I'm having trouble processing that.";
   }
 };


 const handleSendMessage = async () => {
   if (input.trim()) {
     setMessages(prevMessages => [...prevMessages, { role: 'user', content: input.trim() }]);
     const match = getClosestMatch(input.trim());
    
     let botResponse = match ? match.completion : await fetchFromOpenAI(input.trim());


     setMessages(prevMessages => [...prevMessages, { role: 'bot', content: botResponse }]);
     setInput('');
   }
 };


 return (
   <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
     <View style={styles.header}>
     <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
       <Text style={styles.headerText}>Gunrock AI</Text>
     </View>
     <ScrollView style={styles.messagesContainer}>
       {messages.map((message, index) => (
         <View key={index} style={message.role === 'user' ? styles.userMessage : styles.botMessage}>
           <Text style={styles.messageText}>{message.content}</Text>
         </View>
       ))}
     </ScrollView>
     <View style={styles.inputContainer}>
       <TextInput
         style={styles.input}
         placeholder="Type a message..."
         value={input}
         onChangeText={setInput}
         onSubmitEditing={handleSendMessage}
       />
       <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
         <Ionicons name="send" size={24} color="white" />
       </TouchableOpacity>
     </View>
     <CustomNavBar navigation={navigation}/>
   </KeyboardAvoidingView>
 );
};


const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#f5f5f5'
 },
 header: {
   flexDirection: 'row',
   alignItems: 'center',
   justifyContent: 'center',
   padding: 20,
   backgroundColor: '#954535',
 },
 backButton: {
   position: 'absolute',
   left: 10,
   top: 70,
   zIndex: 10,
 },
 headerText: {
   marginTop: 45,
   color: '#ffffff',
   fontSize: 20,
   fontWeight: 'bold'
 },
 messagesContainer: {
   flex: 1,
   padding: 10
 },
 messageText: {
   color: '#ffffff'
 },
 userMessage: {
   alignSelf: 'flex-end',
   marginVertical: 5,
   padding: 10,
   backgroundColor: '#C4A484',
   borderRadius: 20,
   maxWidth: '80%',
 },
 botMessage: {
   alignSelf: 'flex-start',
   marginVertical: 5,
   padding: 10,
   backgroundColor: '#954535',
   borderRadius: 20,
   maxWidth: '80%'
 },
 inputContainer: {
   flexDirection: 'row',
   padding: 10,
   marginBottom: 25
 },
 input: {
   flex: 1,
   padding: 10,
   backgroundColor: '#ffffff',
   borderTopLeftRadius: 20,
   borderBottomLeftRadius: 20,
   fontSize: 16
 },
 sendButton: {
   padding: 10,
   backgroundColor: '#C4A484',
   borderTopRightRadius: 20,
   borderBottomRightRadius: 20
 },
});


export default ChatbotUI;
