import Firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAFDOkTTxvGdvdkXLCrQW1z72XmXZspzF0",
    authDomain: "idea-me-4887a.firebaseapp.com",
    databaseURL: "https://idea-me-4887a.firebaseio.com",
    projectId: "idea-me-4887a",
    storageBucket: "idea-me-4887a.appspot.com",
    messagingSenderId: "77557779345"
};

Firebase.initializeApp(config);

export default Firebase;