// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEwvSQdTiVBpzT9r6m9-uyOvqPUJNOcoc",
  authDomain: "assignmnet-09.firebaseapp.com",
  projectId: "assignmnet-09",
  storageBucket: "assignmnet-09.appspot.com",
  messagingSenderId: "677684465929",
  appId: "1:677684465929:web:e87a4f8539cfe30e90c3d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;

