const movingText = document.getElementById('moving-text');
let position = 0;

function moveText() {
  position += 5; 
  movingText.style.left = position + 'px'; 
  
  if (position >= window.innerWidth - 600) { 
    position = -movingText.offsetWidth - 600; 
  }
}

setInterval(moveText, 20); 

function start() {
   window.open("./pages/Game itself/Game.html", "_blank");
}
