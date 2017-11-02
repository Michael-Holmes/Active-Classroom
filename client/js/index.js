let config = {
    apiKey: "AIzaSyC3jnyxBdcyCEs4dmMGrlDOxMlOea2Vv5U",
    authDomain: "activeclassroom-4882a.firebaseapp.com",
    databaseURL: "https://activeclassroom-4882a.firebaseio.com",
    projectId: "activeclassroom-4882a",
    storageBucket: "activeclassroom-4882a.appspot.com",
    messagingSenderId: "49083929227"
  };
firebase.initializeApp(config);

let variableCookie;
$(document).ready(function(){
  variableCookie = getCookie("username");
  if(variableCookie === ""){
    console.log("not logged in");
    location.href="../login.html";
  }
});

let ref = firebase.database().ref();

let store = ref.child('Classroom/6112/Activity/One');
let message = {};

function getValues() {
  let storeRef = store.push();
  //let timeRef = timeStamp.push();
  let time = new Date();
  let m = document.getElementById("btn-input").value;
  storeRef.set({
    message: m,
    name: variableCookie,
    timeStamp: time
  });
  //timeRef.set({Time: new Date()});
}

let retrev = ref.child('Classroom/6112/Activity/One');
// Retrieves curerent data from DB and any new entries
  retrev.on("child_added", function(snapshot) {
    message = (snapshot.val());
    
    //let messages = message;
    console.log(message);
  }, function (errorObject) {
    console.log("the read failed: " + errorObject.code);
});

//let appAng = angular.moule()


//  function addMessageToDisplay(messages) {
//     /*let el = document.getElementById('response');
//      .innerHTML = message;*/
//      $('#msgtext').text(messages.message);
//      console.log(messages.message); //this contains all DB data
   
//  }

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}