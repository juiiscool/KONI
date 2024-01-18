//change color background to match the video logo
function change(){
    var body = document.querySelector("body");
    body.style.backgroundColor = "#0024A0";
}
setInterval(change, 1040);

//vid closes

var vid = document.getElementById("prezantimi");
var labyrinth = document.getElementById("mother");

vid.onended = function(){
    vid.remove()
    labyrinth.style.visibility = "visible";
};

// gallery

function hover(element) {
    element.setAttribute('src', 'assets/pictures/icons8-gallery-100 (2).png');
}
  
  function unhover(element) {
    element.setAttribute('src', 'assets/pictures/icons8-gallery-100.png');
}

// change from index.html to about.html

function replace(){
    window.location.replace("about.html");
}