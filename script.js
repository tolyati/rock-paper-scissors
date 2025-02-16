const movingText = document.getElementById('moving-text');
let position = 0;
let direction = 1;
const speed = 2;

function moveText() {
  const screenWidth = document.documentElement.clientWidth;
  const textWidth = movingText.offsetWidth;

  position += speed * direction;

  if (position > screenWidth) {
    position = -textWidth;
  }
  if (position < -textWidth) {
    position = screenWidth;
  }

  movingText.style.left = position + 'px';
  requestAnimationFrame(moveText);
}

movingText.addEventListener('click', () => {
  direction *= -1;
});

window.onload = () => {
  movingText.style.left = "0px";
  moveText();
};
