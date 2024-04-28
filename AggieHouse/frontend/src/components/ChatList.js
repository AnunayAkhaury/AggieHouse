import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ChatItem from './ChatItem';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
const mockUsers = [
    { id: '1', name: 'John Doe', lastMessage: 'Hey, how are you?' },
    { id: '2', name: 'Jane Smith', lastMessage: "What's up?" },
    { id: '3', name: 'Alice Johnson', lastMessage: 'See you soon!' },
  ];

export default function ChatList({ users }) {
    const navigation = useNavigation();
    console.log("Users in ChatList:", users);  // Debugging line
    const renderItem = ({ item, index }) => (
      
        <ChatItem
            noBorder={index + 1 === users.length} // No border for the last item
            navigation={navigation}
            item={item}
            index={index}
        />
    );

    // Key extractor for the list, uses the item's id if available, or the index as a fallback
    const keyExtractor = (item, index) => item.id ? item.id.toString() : index.toString();

    return (
        <View style={styles.container}>
            <Text style={styles.header}></Text>
            <FlatList
                data={users}
                contentContainerStyle={styles.listContainer}
                keyExtractor={keyExtractor}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
            />
        </View>
    );
}

// Styles for the ChatList component
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        padding: 0,
    },
    listContainer: {
        flexGrow: 1,
        paddingVertical: 25,
    },
});
