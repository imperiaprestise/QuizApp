import firebase from 'firebase/compat/app';
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBWBd41duqMlldbaiDFYZtEOto8ViyMQXI",
  authDomain: "quiz-949d3.firebaseapp.com",
  projectId: "quiz-949d3",
  storageBucket: "quiz-949d3.appspot.com",
  messagingSenderId: "145885748871",
  appId: "1:145885748871:web:6766d1a11db42e44f5e222",
  measurementId: "G-GH1TZ9JR0Y"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };