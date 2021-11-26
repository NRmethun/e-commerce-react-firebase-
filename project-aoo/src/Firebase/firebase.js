import firebase from "firebase" ;



  const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyCZ7Qi4j99QZ4atmX75JyX0wcP2a3fznhs",
    authDomain: "book-app-2a5ca.firebaseapp.com",
    projectId: "book-app-2a5ca",
    storageBucket: "book-app-2a5ca.appspot.com",
    messagingSenderId: "234299963844",
    appId: "1:234299963844:web:cce3961c43988d9324cc91"
  }) ;

  const db = firebaseApp.firestore() ;
  const auth = firebase.auth() ; 

  export {db ,auth} ;

  // firebase i firebase