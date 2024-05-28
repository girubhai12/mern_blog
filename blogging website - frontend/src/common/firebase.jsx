// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBDtbOlSmSF6a4urI27cHFN85fz9WrDEEQ",
  authDomain: "react-js-blog-website-yt-f0685.firebaseapp.com",
  projectId: "react-js-blog-website-yt-f0685",
  storageBucket: "react-js-blog-website-yt-f0685.appspot.com",
  messagingSenderId: "330122406128",
  appId: "1:330122406128:web:e6b54a0c143c6bcf783a35",
  measurementId: "G-PDKNF2LQ3W"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// google auth 

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const authWithGoogle = async () => {

    let user= null;

    await signInWithPopup (auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err);
    })
    return user;
}