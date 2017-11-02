let usernameVariable;

$(document).ready(function(){
    if(getCookie("username") !== ""){
        checkCookie();
    }
        
   $("#signInButton").on("click", function(){
       usernameVariable = $("#inputUsername").val();
       setCookie("username", usernameVariable, 365);
       // pass to db;
    });
});

function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    location.href="../index.html";
}

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

function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        setCookie("loggedIn", "true", 365);
        location.href="../index.html";
    } else {
        user = usernameVariable;
        if (user != "" && user != null) {
            setCookie("username", user, 365);
            
        }
    }
}