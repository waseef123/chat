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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById('user_name').innerHTML = "Welcome "+ user_name+ " !" ;
function addRoom() {
    room_name=document.getElementById("room_name").value ;
    firebase.database().ref("/").child(room_name).update({
          purpose:"Adding Room Name"
    }) ;

    localStorage.setItem('room_name',room_name) ;
    window.location = "chat_page.html" ;
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name -" + Room_names) ;
    ROW = "<div class= 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr> " ;
    document.getElementById('output').innerHTML += ROW;
    
    //End code
    });});}
getData();

function redirectToRoomName(name) {
console.log(name) ;
localStorage.setItem('room_name', name) ;
window.location = "chat_page.html";
}
function logout() {
    localStorage.removeItem("user_name") ;
    localStorage.removeItem("room_name") ;
    window.location = 'index.html'}
