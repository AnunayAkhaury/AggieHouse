import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const StartPage = () => {
    return (
        <View style={styles.container}>
            <Image 
                source={require("/Users/akshajjoshi/AJROOT/AggieHouse/AggieHouse/frontend/assets/Aggie House IMG.png")}
                style={styles.image}/>
            <View style={styles.buttonsView}>
                <TouchableOpacity onPress={onLoginClick} style={styles.button}>
                    <Text style={styles.buttonText}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSignUpClick} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    );
}

const onLoginClick = () => {
    // Action
}

const onSignUpClick = () => {
    // Action
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(220,204,192)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18, 
        fontWeight: 'bold',
    },
    image: {
        width: 400, 
        height: 400,
        marginBottom: 30, // Adjust as needed
    },
    button: {
        paddingVertical: 10,
        borderRadius: 18,
        marginTop: 30,
        paddingHorizontal: 90,
        paddingVertical: 10, // Extend the width to fit the whole screen
        backgroundColor: "#954435"
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center', // Center the text within the button
    },
    buttonsView: {
        marginBottom: 100,
    }
})

export default StartPage;
