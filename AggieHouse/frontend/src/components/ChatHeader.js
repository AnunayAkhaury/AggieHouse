import React from 'react';
import { View, Text, Image, Platform, StyleSheet } from 'react-native';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 

export default function ChatHeader() {
    const insets = useSafeAreaInsets(); // useSafeAreaInsets provides the insets
    const ios = Platform.OS === 'ios';
    
    // Ensure paddingTop receives a number, default to 0 if not
    const paddingTopValue = ios ? insets.top : (insets.top || 0) + 10;
  
    return (
      <View style={[styles.header, { paddingTop: paddingTopValue }]}>
        <Text style={styles.headerText}>Chats</Text>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/seed/696/300" }}
        />
      </View>
    );
  }

const styles = StyleSheet.create({
  header: {
    height: 120,
    flexDirection: 'row',
    justifyContent: 'space-between', // Aligns items to each side of the view
    alignItems: 'center', // Vertically center the items in the header
    paddingHorizontal: 15,
    backgroundColor: '#954435',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    paddingTop: 0,
  },
  headerText: {
    fontSize: 24, // Adjusted for better visibility
    color: 'white',
    fontWeight: 'bold',
  },
  image: {
    height: 50, // Adjust size as needed
    width: 50,
    borderRadius: 25,
  },
});
