import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { Calendar as RNCalendar } from 'react-native-calendars';
const Calendar = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedShift, setSelectedShift] = useState(null);
  // Dummy data for upcoming shifts
  const shifts = {
    upcoming: [
      { date: '2024-04-22', startTime: '09:00', endTime: '12:00', tasks: 'Organize books' },
      { date: '2024-04-23', startTime: '10:00', endTime: '14:00', tasks: 'Assist in workshop' },
    ]
  };
  // Generating marked dates for calendar
  const markedDates = shifts.upcoming.reduce((acc, shift) => {
    const formattedDate = shift.date;
    acc[formattedDate] = { marked: true, dotColor: 'green', shifts: [shift] };
    return acc;
  }, {});
  const onDayPress = (day) => {
    if (markedDates[day.dateString]) {
      setSelectedShift({
        date: day.dateString,
        ...markedDates[day.dateString].shifts[0],
      });
      setShowModal(true);
    }
  };
  const ShiftItem = ({ shift }) => (
    <View style={styles.shiftItem}>
      <Text style={styles.shiftText}>Date: {shift.date}</Text>
      <Text style={styles.shiftText}>Start: {shift.startTime}</Text>
      <Text style={styles.shiftText}>End: {shift.endTime}</Text>
      <Text style={styles.shiftText}>Tasks: {shift.tasks}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Volunteer Shift Schedule</Text>
      <RNCalendar
        style={styles.calendar}
        current={new Date().toISOString().split('T')[0]}
        onDayPress={onDayPress}
        markingType={'simple'}
        markedDates={markedDates}
        enableSwipeMonths={true}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Date of Shift: {selectedShift?.date}</Text>
            <Text style={styles.modalText}>Start Time: {selectedShift?.startTime}</Text>
            <Text style={styles.modalText}>End Time: {selectedShift?.endTime}</Text>
            <Text style={styles.modalText}>Tasks: {selectedShift?.tasks}</Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setShowModal(!showModal)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView style={styles.shiftsScroll}>
        <View style={styles.shiftsContainer}>
          <Text style={styles.shiftsTitle}>Upcoming Shifts</Text>
          {shifts.upcoming.map((shift, index) => (
            <ShiftItem key={`upcoming-${index}`} shift={shift} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: 'rgb(220, 204, 192)',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
    color: '#954535',
  },
  shiftsScroll: {
    marginBottom: 20,
  },
  shiftsContainer: {
    backgroundColor: 'rgb(220, 204, 192)',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  shiftsTitle: {
    color: '#954535',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop:15,
    textAlign: 'center',
  },
  shiftItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  shiftText: {
    color: '#954535',
    fontSize: 14,
    flex: 1,
    marginHorizontal: 5,
  },
  calendar: {
    borderWidth: 3,
    borderColor: '#954535',
    borderRadius: 8,
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
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
    color: 'rgb(84, 84, 84)',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#954535',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Calendar;