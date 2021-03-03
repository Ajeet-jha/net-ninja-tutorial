import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyA8owcn4jhrudDgb_PT6DN4O-gWZPbNXOQ",
    authDomain: "fir-react-project-230ae.firebaseapp.com",
    projectId: "fir-react-project-230ae",
    storageBucket: "fir-react-project-230ae.appspot.com",
    messagingSenderId: "335165430578",
    appId: "1:335165430578:web:9612ad39d617c08f17552b",
    measurementId: "G-MY7TNBW2HV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({
      timestempsInSnapshots: true
  })

  export default firebase