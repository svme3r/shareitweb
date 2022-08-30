import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAwJAesSYRagacIwkWwoANTNIHREeQ-RO8",
  authDomain: "shareit-c4037.firebaseapp.com",
  projectId: "shareit-c4037",
  storageBucket: "shareit-c4037.appspot.com",
  messagingSenderId: "922170060005",
  appId: "1:922170060005:web:aa4ce228a07870c72e380c",
  measurementId: "G-74J9HR8N6F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;