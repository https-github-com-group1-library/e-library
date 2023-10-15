import { getFirestore, doc, updateDoc } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js';


async function getUserData() {
    const response = await fetch("http://localhost:3000/data");

    const info = await response.json();

    const firstname = info[0].firstname;

    document.querySelector(".firstname2").textContent = firstname;

    const lastname = info[0].lastname;

    document.querySelector(".lastname2").textContent = lastname;
    const email = info[0].email;
    document.querySelector(".email2").textContent = email;

    const address = info[0].address;

    document.querySelector(".address2").textContent = address;
}
getUserData();


// const firebaseConfig = {
//     apiKey: "AIzaSyCQM2ALk3jc04MEhCxETa6wRIzhem_Tit8",
//     authDomain: "e-library-4a89d.firebaseapp.com",
//     projectId: "e-library-4a89d",
//     storageBucket: "e-library-4a89d.appspot.com",
//     messagingSenderId: "606843380299",
//     appId: "1:606843380299:web:61a3bd9d75b1cc64eee3ce",
//     measurementId: "G-259LECQSMQ"
// };


// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);



function updateUserData(userEmail) {

    var updatedFirstname = document.getElementById("callfirstname").value;
    var updatedLastname = document.getElementById("calllastname").value;
    var updatedAddress = document.getElementById("calladdress").value;

    fetch(`http://localhost:3000/data`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            firstname: updatedFirstname,
            lastname: updatedLastname,
            address: updatedAddress
        }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error("Error updating data:", error));
}

async function edit() {
    
    const response = await fetch("http://localhost:3000/data");
    const info = await response.json();

    const userEmail = info[0]?.email;

    if (!userEmail) {
        console.error("Email or ID is undefined, stopping the update process.");
        return;
    }
    updateUserData(userEmail);

}

edit();



// // create button to call
// var form = document.getElementById("form-profile")
// var divForButton = document.createElement("div");
// divForButton.classList.add("divButton")




