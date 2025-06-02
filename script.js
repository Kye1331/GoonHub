// Wait for the DOM to load before attaching event listeners

document.addEventListener("DOMContentLoaded", function () {
  const calebButton = document.getElementById("caleb");
  const kyeButton = document.getElementById("kye");
  const aaravButton = document.getElementById("aarav");
 const armanButton = document.getElementById("arman");

  try{
 if(localStorage.getItem('hasAccess') == 'false'){

 window.location.href='index.html'
   
}
  } catch{
 window.location.href='index.html'

  }
  calebButton.addEventListener("click", function () {
    window.location.href = "caleb.html";
  });

 
  kyeButton.addEventListener("click", function () {
    window.location.href = "kye.html";
  });

   aaravButton.addEventListener("click", function () {
    window.location.href = "aarav.html";
  });

   armanButton.addEventListener("click", function () {
    window.location.href = "arman.html";
  });
  
});

// Function to open an image in fullscreen
function openFullscreen(imgElement) {
  if (imgElement.requestFullscreen) {
    imgElement.requestFullscreen();
  } else if (imgElement.mozRequestFullScreen) {
    imgElement.mozRequestFullScreen();
  } else if (imgElement.webkitRequestFullscreen) {
    imgElement.webkitRequestFullscreen();
  } else if (imgElement.msRequestFullscreen) {
    imgElement.msRequestFullscreen();
  }
}
