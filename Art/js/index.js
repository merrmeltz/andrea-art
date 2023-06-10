// Header background refresh

var randomNumber = (Math.floor(Math.random() * 6)) + 1;
document.getElementById("top").style.backgroundImage = "url(images/img" + randomNumber + ".jpg)";

// Navigation Bar
var nBar = document.getElementById("navigationBar");
var navStick = nBar.offsetTop;
var artStick = art.offsetTop - 100;
window.onscroll = function() {stickyHeader()};

function stickyHeader(){
  if (window.pageYOffset > navStick && window.pageYOffset < artStick) {
    nBar.classList.add("sticky");
    }
  else {
    nBar.classList.remove("sticky");
      navStick = nBar.offsetTop;
  }
}
