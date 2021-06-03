
//ADD YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDUJszjil0g4vgEue8LaEpshj79w4Zoba8",
    authDomain: "class-test-817de.firebaseapp.com",
    databaseURL: "https://class-test-817de-default-rtdb.firebaseio.com",
    projectId: "class-test-817de",
    storageBucket: "class-test-817de.appspot.com",
    messagingSenderId: "673949863127",
    appId: "1:673949863127:web:8b2fa73f149e8adfab3492"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser()
  {
      user_name = document.getElementById("user_name").value;
      firebase.database().ref("/").child(user_name).update({
          purpose: " adding user "
      });
  }