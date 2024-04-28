import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoCK9SdoMJ2vFvU5YfsJhw7IyuEht369w",
  authDomain: "aggiehouse-c762e.firebaseapp.com",
  projectId: "aggiehouse-c762e",
  storageBucket: "aggiehouse-c762e.appspot.com",
  messagingSenderId: "430914749219",
  appId: "1:430914749219:web:a3f03f8ea7d9373a914296",
  measurementId: "G-79P9KGN5HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth }; 