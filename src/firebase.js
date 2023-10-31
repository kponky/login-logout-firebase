import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyD_HoU6mZ7BaS62XLLxT2WIDKojUU87jRs",
  authDomain: "signup-signin-app1.firebaseapp.com",
  projectId: "signup-signin-app1",
  storageBucket: "signup-signin-app1.appspot.com",
  messagingSenderId: "868761426782",
  appId: "1:868761426782:web:757672b9811d7aeadc4dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();
export const auth =getAuth(app);

export  const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
  console.log(error);
  
})
};