// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyQQdTzZt9EUiOHrHt1b6ZtEyB2FUMR_Y",
  authDomain: "outfitted-project-3.firebaseapp.com",
  databaseURL: "https://outfitted-project-3-default-rtdb.firebaseio.com",
  projectId: "outfitted-project-3",
  storageBucket: "outfitted-project-3.appspot.com",
  messagingSenderId: "415292314165",
  appId: "1:415292314165:web:ed82615471b3c86649177c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;