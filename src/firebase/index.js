import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyAkZbQPo6HnD44VuPq6Oqi5F7uIBeR5sHo",
    authDomain: "hanafiantho3011.firebaseapp.com",
    databaseURL: "https://hanafiantho3011.firebaseio.com",
    projectId: "hanafiantho3011",
    storageBucket: "hanafiantho3011.appspot.com",
    messagingSenderId: "487478294648",
    appId: "1:487478294648:web:e87b9dd2a6c8acb8"

  };
  // Initialize Firebase
  export const Fire = firebase.initializeApp(firebaseConfig);