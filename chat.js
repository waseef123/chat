// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
    apiKey: "AIzaSyA30F5L3GSOnEsILLD35GF_480gMsHzkx4",
    authDomain: "kwitter-21a4f.firebaseapp.com",
    databaseURL: "https://kwitter-21a4f-default-rtdb.firebaseio.com",
    projectId: "kwitter-21a4f",
    storageBucket: "kwitter-21a4f.appspot.com",
    messagingSenderId: "288157246378",
    appId: "1:288157246378:web:0c9d44290e00b8c2c681d3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



