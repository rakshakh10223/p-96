//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBPX_H1QlMhsKgwe-kUCbXr5_RefP0hNzE",
    authDomain: "kwitter-f58f9.firebaseapp.com",
    databaseURL: "https://kwitter-f58f9-default-rtdb.firebaseio.com",
    projectId: "kwitter-f58f9",
    storageBucket: "kwitter-f58f9.appspot.com",
    messagingSenderId: "77515196247",
    appId: "1:77515196247:web:e755055cb33f5e09dde012"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
     name:user_name, 
     message:msg,
      like:0 
    });
    document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
