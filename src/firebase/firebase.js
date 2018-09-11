import firebase from 'firebase/app';
import 'firebase/auth';

const prodConfig = {
  apiKey: "AIzaSyDcVh4PCOS5XchkPAegJX8yFj15RHYuLRA",
  authDomain: "rtd-mobile-app-1536438308113.firebaseapp.com",
  databaseURL: "https://rtd-mobile-app-1536438308113.firebaseio.com",
  projectId: "rtd-mobile-app-1536438308113",
  storageBucket: "rtd-mobile-app-1536438308113.appspot.com",
  messagingSenderId: "768944553740"
};

const devConfig = {
  apiKey: "AIzaSyDcVh4PCOS5XchkPAegJX8yFj15RHYuLRA",
  authDomain: "rtd-mobile-app-1536438308113.firebaseapp.com",
  databaseURL: "https://rtd-mobile-app-1536438308113.firebaseio.com",
  projectId: "rtd-mobile-app-1536438308113",
  storageBucket: "rtd-mobile-app-1536438308113.appspot.com",
  messagingSenderId: "768944553740"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;
  

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
  auth
};