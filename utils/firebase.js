import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  initializeAuth, 
  getReactNativePersistence 
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAlLLoOgiB9KaEptlRAp4GB2v7EGk48rqA",
  authDomain: "wings-ai-b913f.firebaseapp.com",
  projectId: "wings-ai-b913f",
  storageBucket: "wings-ai-b913f.appspot.com",
  messagingSenderId: "981482671231",
  appId: "1:981482671231:web:xxxxxxx",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth with React Native persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
