import * as firebase from "firebase";

// credentials of Firebase SDK
const firebaseConfig = {
  apiKey: "AIzaSyDgt9KSirkp9TcSyDAifw3R7xPbdDLaaKw",
  authDomain: "client-react-11813.firebaseapp.com",
  projectId: "client-react-11813",
  storageBucket: "client-react-11813.appspot.com",
  messagingSenderId: "418800552978",
  appId: "1:418800552978:web:de62a3a3f58f0eaa1a1ccb",
};

// Initialize app with Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

