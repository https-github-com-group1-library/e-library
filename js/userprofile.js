async function getUserData(id) {
    const response = await fetch("http://localhost:3000/data");
  
    const info = await response.json();
  
    const firstname = info[id - 1].firstname;
  
    document.querySelector(".firstname2").textContent = firstname;
  
    const lastname = info[id - 1].lastname;
  
    document.querySelector(".lastname2").textContent = lastname;

    const email = info[id - 1].email;

    document.querySelector(".email2").textContent = email;
  
    const address = info[id - 1].address;
  
    document.querySelector(".address2").textContent = address;
  }
  getUserData(1);
  // -----------------------------------------------------
  async function updateUserData() {
    const userId = 1; // ID of the user you want to update
    const firstname2 = document.getElementById("callfirstname").value;
    const lastname2 = document.getElementById("calllastname").value;
    const address2 = document.getElementById("calladdress").value;
  
    const existingEmail = document.querySelector(".email2").textContent;
  
    // Only update if firstname2 is not null or empty
    if (firstname2) {
      const response = await fetch(`http://localhost:3000/data/${userId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          firstname: firstname2,
          lastname: lastname2,
          address:`Address: ${address2}`,
          email:`${existingEmail}`, // Preserve the existing email
        }),
      });
  
      // Handle the response if needed
      if (response.ok) {
        // Data updated successfully
        console.log("User data updated successfully");
      } else {
        console.error("Failed to update user data");
      }
    }
  }
  
  // ----------------------------------------------------------------------------------
  // function updatepost() {
  //   let firstname = document.getElementById("callfirstname").value;
  //   let lastname = document.getElementById("calllastname").value;
  //   let address = document.getElementById("calladdress").value;
  //   fetch("http://localhost:3000/data", {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       id: "",
  //       firstname: `${firstname}`,
  //       lastname: `${lastname}`,
  //       address: `${address}`,
  //     }),
  //   });
  // }
  // ---------------------------------------------------------------------------
  // updatepost();
  
  // const firebaseConfig = {
  //   apiKey: "AIzaSyCQM2ALk3jc04MEhCxETa6wRIzhem_Tit8",
  //   authDomain: "e-library-4a89d.firebaseapp.com",
  //   projectId: "e-library-4a89d",
  //   storageBucket: "e-library-4a89d.appspot.com",
  //   messagingSenderId: "606843380299",
  //   appId: "1:606843380299:web:61a3bd9d75b1cc64eee3ce",
  //   measurementId: "G-259LECQSMQ",
  // };
  
  // const app = initializeApp(firebaseConfig);
  // const db = getFirestore(app);
  
  // // const response = await fetch("http://localhost:3000/data");
  // // const info = await response.json();
  
  // function updateUserData() {
  //   var updatedFirstname = document.getElementById("callfirstname").value;
  //   var updatedLastname = document.getElementById("calllastname").value;
  //   var updatedAddress = document.getElementById("calladdress").value;
  
  //   fetch(`http://localhost:3000/data`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       firstname: updatedFirstname,
  //       lastname: updatedLastname,
  //       address: updatedAddress,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error("Error updating data:", error));
  // }
  // async function edit() {
  //   const response = await fetch("http://localhost:3000/data");
  //   const info = await response.json();
  
  //   const userEmail = info[0]?.email;
  
  //   if (!userEmail) {
  //     console.error("Email or ID is undefined, stopping the update process.");
  //     return;
  //   }
  //   updateUserData(userEmail);
  // }
  // edit();
  
  // // create button to call
  // var form = document.getElementById("form-profile")
  // var divForButton = document.createElement("div");
  // divForButton.classList.add("divButton")
  // -------------------------------------------
  // npx json-server --watch db-userprofile.json --port 3000