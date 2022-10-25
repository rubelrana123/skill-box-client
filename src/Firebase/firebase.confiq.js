// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdxtRSBYcPwmkpv_Wf8RrqiFMiO1-gg5c",
  authDomain: "skill-boxx.firebaseapp.com",
  projectId: "skill-boxx",
  storageBucket: "skill-boxx.appspot.com",
  messagingSenderId: "1086373945315",
  appId: "1:1086373945315:web:c3d221455a0ef997f60ad6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;