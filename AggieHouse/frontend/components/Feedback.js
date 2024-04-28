import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, ScrollView } from 'react-native';

const FeedbackScreen = () => {
  const [name, setName] = useState('');
  const [coVolunteerName, setCoVolunteerName] = useState('');
  const [shiftDate, setShiftDate] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(null);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [isChoresModalVisible, setChoresModalVisible] = useState(false);
  const [selectedChore, setSelectedChore] = useState('Select Chore');
  const [itemsToPurchase, setItemsToPurchase] = useState('');

  const chores = [
    "Cleaned Volunteer Bathroom",
    "Cleaned Fridge",
    "Took Out the Trash (Landfill + Compost)",
    "Put Trash Cans on the Curb",
    "Vacuumed Stairs/Hallway",
    "Laundry (Volunteer Sheets/Bedding)"
  ];

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

      <Modal
        animationType="slide"
        transparent={true}
        visible={isChoresModalVisible}
        onRequestClose={() => setChoresModalVisible(false)}
      >
        <View style={styles.modalContent}>
          <ScrollView style={{ maxHeight: 200 }}>
            {chores.map((chore, index) => (
              <TouchableOpacity
                key={index}
                style={styles.choreItem}
                onPress={() => {
                  setSelectedChore(chore);
                  setChoresModalVisible(false);
                }}
              >
                <Text style={styles.choreText}>{chore}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>Volunteer Shift Log</Text>
      </View>

      <Text style={styles.label}>Co-Volunteer Name (first and last)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter co-volunteer's full name"
        value={coVolunteerName}
        onChangeText={setCoVolunteerName}
      />

      <Text style={styles.label}>Shift Date</Text>
      <TextInput
        style={styles.input}
        placeholder="MM / DD / YYYY"
        value={shiftDate}
        onChangeText={setShiftDate}
      />

      <Text style={styles.label}>Chores Completed</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setChoresModalVisible(true)}
      >
        <Text>{selectedChore}</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Items that need to be purchased (cleaning products, laundry detergent, office supplies, etc.)</Text>
      <TextInput
        style={styles.input}
        placeholder="List items to purchase"
        value={itemsToPurchase}
        onChangeText={setItemsToPurchase}
        multiline
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
    justifyContent: 'flex-start',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: '#954535',
    borderRadius: 30,
    padding: 15,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  headerContainer: {
    marginBottom: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 50,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 50,
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
    marginBottom: 10,
    marginTop:15,
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
    marginTop: 12,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  choreItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  choreText: {
    fontSize: 16,
  }
});

export default FeedbackScreen;
