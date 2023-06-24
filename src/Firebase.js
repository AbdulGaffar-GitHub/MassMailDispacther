import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {useState} from "react";
// Your web app's Firebase configuration
{/*const[loggedin,setLoggedin] = useState("false");*/}
const firebaseConfig = {
  apiKey: "AIzaSyACy__Gavd6vSJOq6Ob5TjLA0r1rSe8O9k",
  authDomain: "mail-d895b.firebaseapp.com",
  projectId: "mail-d895b",
  storageBucket: "mail-d895b.appspot.com",
  messagingSenderId: "761107624451",
  appId: "1:761107624451:web:e21bbc13e283f7852e1436"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      console.log(profilePic);

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    //  result ? setLoggedin(true) : null;
    })
    .catch((error) => {
      console.log(error);
    });

};
// export const logged = () => {
//    return loggedin;
  //}; 
