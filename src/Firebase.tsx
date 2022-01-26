// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh2230bc2drQ-UXxGEF_5viv99yOwyGdU",
  authDomain: "learnwithus101-cec4a.firebaseapp.com",
  projectId: "learnwithus101-cec4a",
  storageBucket: "learnwithus101-cec4a.appspot.com",
  messagingSenderId: "296824949846",
  appId: "1:296824949846:web:2ef24f1fa4e71cfb467ff7",
  measurementId: "G-DRD8Z03B9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage(app)
export default storage
