import { initializeApp } from 'firebase/app';
import { getDatabase, push, ref, set, update,child,get } from "firebase/database";

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMPXem8vBz4__R1-MCB_RjRZku2SZ2a7k",
  authDomain: "tuto-e0d72.firebaseapp.com",
  databaseURL: "https://tuto-e0d72-default-rtdb.firebaseio.com",
  projectId: "tuto-e0d72",
  storageBucket: "tuto-e0d72.appspot.com",
  messagingSenderId: "1020430580923",
  appId: "1:1020430580923:web:8ef5997b3b4daace91fd9e",
  measurementId: "G-4XD8JD6R6T"
};


const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const database = getDatabase(app);


export default database