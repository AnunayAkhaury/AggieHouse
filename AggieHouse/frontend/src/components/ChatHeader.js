import React from 'react';
import { View, Text, Image, Platform, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 

const ChatHeader = () => {
    const insets = useSafeAreaInsets();
    const ios = Platform.OS === 'ios';
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
};

const styles = StyleSheet.create({
    header: {
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#a68b6d', // A warm brown color
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
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
    },
});

export default ChatHeader;