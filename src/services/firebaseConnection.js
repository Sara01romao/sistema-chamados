import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyA1DGnfn59rvtLwElA1kVbBUdap244MDXA",
    authDomain: "sistema-26331.firebaseapp.com",
    projectId: "sistema-26331",
    storageBucket: "sistema-26331.appspot.com",
    messagingSenderId: "811475569557",
    appId: "1:811475569557:web:09839b6c460a9becfe449c",
    measurementId: "G-SHGGL40MR2"
  };
  
  if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
  }

export default firebase;