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

window.addEventListener("resize", () => {
    let video = document.getElementById("bg-video");
    video.style.width = window.innerWidth + "px";
    video.style.height = window.innerHeight + "px";
});


const movingText = document.getElementById('moving-text');
let position = 0;
let direction = 1; // 1 = вправо, -1 = влево
const speed = 2;

function moveText() {
  position += speed * direction;
            
  if (position > window.innerWidth) {
    position = -movingText.offsetWidth; // Выход слева после правого края
  }
  if (position < -movingText.offsetWidth) {
    position = window.innerWidth; // Выход справа после левого края
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

async function fetchData(){

  const category = 'wildlife';
  const apiKey = '9KsCzEYpSGRbIE3mDOu7zA==DLn1SzRPV0RqeykG';
  const url = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;

  try {
      const response = await fetch(url, {
          method: 'GET',
          headers: {
              'X-Api-Key': apiKey,
              'Accept': 'image/jpg'
          }
      });

      if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
      }

      const imageBlob = await response.blob(); 
      const imageUrl = URL.createObjectURL(imageBlob); 

      const imgElement = document.getElementById("randphoto");
      imgElement.src = imageUrl;
      imgElement.style.display = "block";
      // imgElement.addEventListener('load', () => {
      //     container.innerHTML += '<button>New paragraph</button>';
      //   });

  } catch (error) {
      console.error(error);
  }

}
