// const movingText = document.getElementById('moving-text');
// let position = 0;

// function moveText() {
//   position += 5; 
//   movingText.style.left = position + 'px'; 
  
//   if (position >= window.innerWidth - 600) { 
//     position = -movingText.offsetWidth - 600; 
//   }
// }

// setInterval(moveText, 20); 

window.onresize = () => {
  console.log(window.innerWidth);
}



const movingText = document.getElementById('moving-text');
let position = 0;
let direction = 1; // 1 = вправо, -1 = влево
const speed = 2;

function moveText() {
  position += speed * direction;
            
  if (position > window.innerWidth - 550) {
    position = -movingText.offsetWidth - 600; // Выход слева после правого края
  }
  if (position < -movingText.offsetWidth + 600) {
    position = window.innerWidth - 600; // Выход справа после левого края
  }

  movingText.style.left = position + 'px';
  requestAnimationFrame(moveText);
}

movingText.addEventListener('click', () => {
  direction *= -1; // Меняем направление
});

window.onload = () => {
  movingText.style.left = "0px";
  moveText();
};


function start() {
   window.open("./pages/Gameitself/Game.html", "_blank");
}

