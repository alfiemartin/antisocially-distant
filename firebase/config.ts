import {firebase} from "@firebase/app";
import analytics from "@firebase/analytics"


var firebaseConfig = {
  apiKey: "AIzaSyDhlCn4w6zhE7JWKaVTUp8n98wERqz_HDo",
  authDomain: "socially-distant-966dd.firebaseapp.com",
  projectId: "socially-distant-966dd",
  storageBucket: "socially-distant-966dd.appspot.com",
  messagingSenderId: "119882447158",
  appId: "1:119882447158:web:371dbf21b316fe7ffbdb97",
  measurementId: "G-H5SFDK2BQ7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
