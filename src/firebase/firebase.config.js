import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbcMUPElCAB1awzYlj3d4UIpza_grJTsg",
    authDomain: "ishrafil-car-service.firebaseapp.com",
    projectId: "ishrafil-car-service",
    storageBucket: "ishrafil-car-service.appspot.com",
    messagingSenderId: "560806780130",
    appId: "1:560806780130:web:1e17a02bc3ee02cb8c92bb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);