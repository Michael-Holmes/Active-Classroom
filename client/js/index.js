var config = {
    apiKey: "AIzaSyC3jnyxBdcyCEs4dmMGrlDOxMlOea2Vv5U",
    authDomain: "activeclassroom-4882a.firebaseapp.com",
    databaseURL: "https://activeclassroom-4882a.firebaseio.com",
    projectId: "activeclassroom-4882a",
    storageBucket: "activeclassroom-4882a.appspot.com",
    messagingSenderId: "49083929227"
  };
  firebase.initializeApp(config);
  
  
   var ref = firebase.database().ref();
    
      var store = ref.child('Classroom/6112/Activity/One');
      
      
      //var store = ref.child('Classroom/6112/Activity/One');
      
      
      function getValues() {
        var storeRef = store.push();
        //var timeRef = timeStamp.push();
        var m = document.getElementById("btn-input").value;
        storeRef.set({message: m});
        //timeRef.set({Time: new Date()});
      }
      
      var retrev = ref.child('Classroom/6112/Activity/One');
      
      retrev.on("child_added", function(snapshot) {
        var message = (snapshot.val());
        var timeStamp = new Date();
        addMessageToDisplay(message);
      }, function (errorObject) {
        console.log("the read failed: " + errorObject.code);
      });
    
    
     function addMessageToDisplay(message) {
        /*var el = document.getElementById('response');
         .innerHTML = message;*/
         //$('#msgtext').val(message.);
         console.log(message); //this contains all DB data
         $('')
     }