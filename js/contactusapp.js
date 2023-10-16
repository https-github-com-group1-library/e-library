// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQM2ALk3jc04MEhCxETa6wRIzhem_Tit8",
  authDomain: "e-library-4a89d.firebaseapp.com",
  databaseURL: "https://e-library-4a89d-default-rtdb.firebaseio.com",
  projectId: "e-library-4a89d",
  storageBucket: "e-library-4a89d.appspot.com",
  messagingSenderId: "606843380299",
  appId: "1:606843380299:web:61a3bd9d75b1cc64eee3ce",
  measurementId: "G-259LECQSMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const form = document.querySelector('#form-contactus');


let username = document.getelementbyid("username").value;
let email = document.getelementbyid("email").value;
let subject = document.getelementbyid("subject").value;
let message = document.getelementbyid("message").value;

form.addEventListener('submit').addEventListener('click',function (e){
    e.preventDefault();
    db.collection("feedbacks").doc(uJAM7BPY93JLkJCwsAn4).set({
        Username: username,
         email: email,
         subject: subject,
         message: message
       });
});

