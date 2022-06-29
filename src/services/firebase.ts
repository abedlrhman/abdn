// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDosfFxCZhKm85_IDQxMg29mEDjfrQYaNk",
  authDomain: "abdn-75f8f.firebaseapp.com",
  projectId: "abdn-75f8f",
  storageBucket: "abdn-75f8f.appspot.com",
  messagingSenderId: "373429467898",
  appId: "1:373429467898:web:059a2a17fa3704fc3c6743",
  measurementId: "G-JS8SHWXNP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export {
    analytics
} 

export default app