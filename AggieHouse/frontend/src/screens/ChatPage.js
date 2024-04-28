import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ChatList from '../components/ChatList';
import Loading from '../components/Loading';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import ChatHeader from '../components/ChatHeader';
import { AntDesign } from '@expo/vector-icons';



export default function ChatPage({ navigation}) {
    const [user, setUser] = useState();
    // Start with hardcoded data for testing
    const [users, setUsers] = useState([
    ]); 

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log(currentUser);
            // Comment out to avoid fetching from Firestore during initial tests
            
            if (currentUser) {

                getUsers(currentUser.uid);
            }
            
        });

        return () => unsubscribe(); // Cleanup subscription
    }, []);

    // Comment out the database fetching logic for now
    
    const getUsers = async (uid) => {
        const db = getFirestore();
        const usersRef = collection(db, "users");
        const q = query(usersRef, where('userId', '!=', uid));

        try {
            const querySnapshot = await getDocs(q);
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            console.log('got users as data', data);
            setUsers(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };
    

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <StatusBar style="light"/>
          <ChatHeader />
          {users.length > 0 ? (
              <ChatList users={users} />
          ) : (
              <View style={styles.loadingContainer}>
                
              </View>
          )}
        </View>
      );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loadingContainer: {
        top: hp(30),
        justifyContent: 'center',
        alignItems: 'center',
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
