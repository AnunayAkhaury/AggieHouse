# Aggie Geo Nest

## Introduction

Aggie GeoNest is a React Native application designed to connect volunteers and residents by leveraging advanced features like geolocation, real-time in-app messaging, and an AI chatbot. It integrates Firebase for authentication and real-time data storage, ensuring seamless interaction and enhanced user experience. The application supports various functionalities to aid volunteers and residents in real-time communication and navigation within a geo-fenced community. The app offers real-time data processing and authentication, making it ideal for a wide range of applications that require user authentication and data management.



## Features

Aggie GeoNest includes the following features:

- User Authentication: Integration with Firebase Auth for handling user authentication.
- Real-Time Database: Utilizes Firestore for real-time data storage and retrieval.
- Geolocation: Implements geolocation features for real-time location tracking and geo-fencing.
- AI Chat Bot: A chatbot to assist users and provide information using natural language processing.
- In-App Messaging: Real-time messaging feature for instant communication among users.
- Task Management: Allows users to create, manage, and track tasks within the app.


### Dependencies

Here is a list of major dependencies used in the project:

- React Native
- Expo
- Firebase
- @react-navigation/native
- expo-location
- @react-native-firebase/auth
- @react-native-firebase/app
## Installation/Configuration


To get started with Aggie GeoNest, follow these steps:

Install my-project with npm
To get started with Aggie GeoNest, follow these steps:
```bash
  cd AggieHouse/frontend
   npm install 
```
To set up Firebase please follow Firebase documentation provided below

### Environment Variables

To run the Aggie GeoNest project, you need to set up the following environment variables in a `.env` file in the root directory:

- `FIREBASE_API_KEY`: Your Firebase API key.
- `FIREBASE_AUTH_DOMAIN`: Your Firebase Auth domain.
- `FIREBASE_PROJECT_ID`: Your Firebase project ID.
- `FIREBASE_STORAGE_BUCKET`: Your Firebase storage bucket.
- `FIREBASE_MESSAGING_SENDER_ID`: Your Firebase messaging sender ID.
- `FIREBASE_APP_ID`: Your Firebase app ID.
- `FIREBASE_MEASUREMENT_ID`: Your Firebase measurement ID.
- `FIREBASE_DATABASE_URL`: Your Firebase database URL.
- `API_KEY`: Open API key used for chat bot.

Create a `.env` file in the root of your project and add the following lines:

```plaintext
FIREBASE_API_KEY=your_firebase_api_key_here
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain_here
FIREBASE_PROJECT_ID=your_firebase_project_id_here
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket_here
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id_here
FIREBASE_APP_ID=your_firebase_app_id_here
FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id_here
FIREBASE_DATABASE_URL=your_firebase_database_url_here
API_KEY=your_OPENapi_key_for_external_services_here
```

## Documentation

Additional documentation: 
- https://reactnative.dev/docs/getting-started
- https://firebase.google.com/docs
- https://platform.openai.com/docs/api-reference



## Usage

To run Aggie GeoNest, use the following commands:

To start the application:

```bash
  cd AggieHouse/frontend
  npx expo start 
```

## Examples 

```javascript
const handleSignUp = async (email, password) => {
  try {
    await auth.createUserWithEmailAndPassword(email, password);
  } catch (error) {
    console.error('Signup Error:', error);
  }
};
```

```javascript
const sendMessage = async (message) => {
  const messageRef = firestore().collection('messages').add({
    text: message,
    createdAt: new Date().getTime(),
  });
  return messageRef;
};

```
## Troubleshooting

- App not starting: Ensure all dependencies are installed and environment variables are set correctly.

- Firebase connection issues: Verify that the Firebase configuration is correct and the project has the correct permissions.
