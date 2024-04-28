import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal } from 'react-native';

const FeedbackScreen = () => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);
  const [isAlertVisible, setAlertVisible] = useState(false);


  const submitFeedback = () => {
    setAlertVisible(true); 
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isAlertVisible}
        onRequestClose={() => setAlertVisible(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Thank you for your feedback!</Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setAlertVisible(false)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>




      <View style={styles.imageContainer}>
        <Image
          source={require('/Users/akshajjoshi/AJROOT/AggieHouse/AggieHouse/frontend/assets/feedback.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Give feedback</Text>
      </View>
      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Text style={styles.label}>Rate your experience</Text>
      <View style={styles.ratingContainer}>
        {['Very Bad', 'Bad', 'Neutral', 'Good', 'Very Good'].map((label, index) => (
          <TouchableOpacity key={label} onPress={() => setRating(index)} style={styles.emojiButton}>
            <Text style={[styles.emoji, rating === index && styles.selectedEmoji]}>
              {'😠 😕 😐 🙂 😄'.split(' ')[index]}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Text style={styles.label}>Comment, if any?</Text>
      <TextInput
        style={styles.input}
        placeholder="We would love to hear from you..."
        value={comment}
        onChangeText={setComment}
        multiline
        numberOfLines={4}
      />
      <TouchableOpacity style={styles.button} onPress={submitFeedback}>
        <Text style={styles.buttonText}>SEND FEEDBACK</Text>
      </TouchableOpacity>
      <Text style={styles.disclaimer}>Your review will be checked by the Aggie House Team soon!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(220, 204, 192)',
    justifyContent: 'center', // Center content vertically
  },

// Modal Styles
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
    },
    modalView: {
    margin: 20,
    backgroundColor: 'rgb(220, 204, 192)',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    modalText: {
    marginBottom: 15,
    textAlign: "center"
    },
    buttonClose: {
    backgroundColor: '#954535',
    borderRadius: 30,
    padding: 15,
    elevation: 2
    },
    textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
    },

  headerContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    overflow: 'hidden',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
  },
  input: {
    borderColor: '#954535',
    borderWidth: 2,
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 16,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  emojiButton: {
    marginHorizontal: 5,
  },
  emoji: {
    fontSize: 24,
  },
  selectedEmoji: {
    opacity: 0.5,
  },
  button: {
    backgroundColor: '#954535',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  disclaimer: {
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    marginTop: 20,
  },

  
});

export default FeedbackScreen;
