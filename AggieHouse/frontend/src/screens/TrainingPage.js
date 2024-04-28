import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const TrainingPage = () => {
  const faqs = [
    {
      question: 'There is a late resident who has not informed a Board member where they are or when they will return, what should I do?',
      answer: 'The first thing you should do is contact one of our Case Management Directors (Maya and Shen) or Virginia informing them of the situation so they can reach out to the resident directly. They will take care of the rest and update you!',
      
    },
    {
      question: 'How is Aggie House able to provide housing and resources?',
      answer: 'We get our funding through a variety of different sources, including community and campus grants along with personal donations. To make a donation, check out the donate tab. This allows us to rent a townhouse and enable us to provide food and other resources.'
      // ... other FAQs
    }
    // ... other FAQ objects
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Aggie House Volunteer Training</Text>
      
      {/* Training Content */}
      <Text style={styles.sectionHeader}>Mission and Values:</Text>
      <Text style={styles.paragraph}>
        At Aggie House, our mission is to provide temporary housing and support services to students in need while fostering a friendly and inclusive community environment. Our values include empathy, respect, collaboration, and advocacy for housing rights.
      </Text>

      <Text style={styles.sectionHeader}>Volunteer Responsibilities:</Text>
      <Text style={styles.paragraph}>
        As a volunteer at Aggie House, your responsibilities include completing on-site shifts as assigned, assisting with day-to-day tasks, providing support to residents, participating in social events, and advocating for housing rights.
      </Text>

      {/* ... Include other sections like Shift Schedule, Meal Preparation, Case Management Support, etc. ... */}
      
      <Text style={styles.sectionHeader}>FAQs</Text>
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <Text style={styles.question}>{faq.question}</Text>
          <Text style={styles.answer}>{faq.answer}</Text>
        </View>
      ))}

      <WebView
        style={styles.video}
        source={{ uri: 'https://www.youtube.com/embed/UYhKDweME3A' }}
      />
      <WebView
        style={styles.video}
        source={{ uri: 'https://www.youtube.com/embed/wHBQNIkwWYQ' }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCD4C0',
  },
  header: {
    fontSize: 24,
    color: '#954535',
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
    marginTop: 50
  },
  sectionHeader: {
    fontSize: 20,
    color: '#954535',
    fontWeight: 'bold',
    padding: 20,
    paddingTop: 30,
  },
  paragraph: {
    color: 'black',
    padding: 20,
    paddingBottom: 0,
    fontSize: 18,
  },
  video: {
    height: 300,
    margin: 20,
  },
  faqItem: {
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  question: {
    color: '#954535',
    fontWeight: 'bold',
    fontSize: 18,
  },
  answer: {
    color: 'black',
    fontSize: 16,
    marginTop: 10,
  },
});

export default TrainingPage;
