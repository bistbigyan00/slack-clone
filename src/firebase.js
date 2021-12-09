import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA0Hf3ZqruphSGjwYz7XPZmV2DqGQIDm_Q",
    authDomain: "slack-1691c.firebaseapp.com",
    projectId: "slack-1691c",
    storageBucket: "slack-1691c.appspot.com",
    messagingSenderId: "121630075540",
    appId: "1:121630075540:web:9a5d1260e0639801f8e281"
  };

 //connect with our app
 const firebaseApp = firebase.initializeApp(firebaseConfig)

//login
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// vvi code to connect and get data 
firebaseApp.firestore().settings({ experimentalForceLongPolling: true });
//connect with db 
const db = firebaseApp.firestore();

//exporting the database
export {auth, provider};
export default db;