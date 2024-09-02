// Import the functions you need from the SDKs you need
import {firebase} from '@react-native-firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAJmuaDovhQh-xJ5aDYzFAGa_vWJEPeOYo',
  authDomain: 'recipe-book-4cb17.firebaseapp.com',
  databaseURL: 'https://recipe-book-4cb17-default-rtdb.firebaseio.com',
  projectId: 'recipe-book-4cb17',
  storageBucket: 'recipe-book-4cb17.appspot.com',
  messagingSenderId: '709275351359',
  appId: '1:709275351359:web:378ac649b6197a08b7bb8a',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
