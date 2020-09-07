var getLocation = "https://www.google.com/search?q="

function search(getLocation){
    location = getLocation + encodeURIComponent(document.getElementById('textbox').value);
}

<script src='http://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.2.1.js'></script>


$( ".inner-switch" ).on("click", function() {
    if( $( "body" ).hasClass( "dark" )) {
      $( "body" ).removeClass( "dark" );
      $( ".inner-switch" ).text( "OFF" );
    } else {
      $( "body" ).addClass( "dark" );
      $( ".inner-switch" ).text( "ON" );
    }
});

function reddit(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://www.reddit.com/"
    }
    else if (txtBoxInput.substring(0, 2) == "r/") {
        location = "https://www.reddit.com/" + document.getElementById('textbox').value;
    }
    else {
        location = "https://www.reddit.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function instagram(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://instagram.com/"
    }
    else if (txtBoxInput.substring(0, 2) == "r/") {
        location = "https://instagram.com/" + document.getElementById('textbox').value;
    }
    else {
        location = "https://instagram.com/" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function gmail(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://mail.google.com/mail/u/0/#inbox";
    }
    else {
        location = "https://mail.google.com/mail/u/0/#search/" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function twitter(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://twitter.com/";
    }
    else {
        location = "https://twitter.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function github(){
    var txtBoxInput = document.getElementById('textbox').value
    if (txtBoxInput == '' || txtBoxInput == ' ') {
        location = "https://github.com/";
    }
    else {
        location = "https://github.com/search?q=" + encodeURIComponent(document.getElementById('textbox').value);
    }
}

function startTime() {
    var today = new Date();
    var greeting;
    var h = today.getHours();
    if(h < 12) {
        greeting = "Good morning.";
    }
    else if(h >= 12 && h < 17) {
        greeting = "Good afternoon.";
    }
    else {
        greeting = "Good evening.";
    }

    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =
    h + ":" + m + ":" + s;
    document.getElementById('greetingMsg').innerHTML = greeting;
    var t = setTimeout(startTime, 500);

}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
