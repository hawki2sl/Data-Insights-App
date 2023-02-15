import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQObIL533d0K6bYYVCXrZW_GoQtMFBhFs",
  authDomain: "qs-project-166f9.firebaseapp.com",
  databaseURL: "https://qs-project-166f9-default-rtdb.firebaseio.com/",
  projectId: "qs-project-166f9",
  storageBucket: "qs-project-166f9.appspot.com",
  messagingSenderId: "842384123727",
  appId: "1:842384123727:web:0f26ae657d39cbee58873a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
