const coffee = document.getElementById('coffee');
const freedomWallContainer = document.getElementById('freedom-wall-container');
const freedomWallTextarea = document.getElementById('freedom-wall-textarea');

let isMug1 = true;

coffee.addEventListener('click', () => {
  fadeOut(coffee);
  setTimeout(() => {
    isMug1 = !isMug1;

    if (isMug1) {
      coffee.style.backgroundImage = "url('coffee.png')";
      coffee.style.zIndex = '1';
      hideFreedomWall(); 
    } else {
      coffee.style.backgroundImage = "url('coffee2.png')";
      coffee.style.zIndex = '5';
      showFreedomWall();
    }

    fadeIn(coffee);
  }, 300);
});

function showFreedomWall() {
  freedomWallContainer.style.display = 'flex';
  freedomWallTextarea.value = ''; 
}

function hideFreedomWall() {
  freedomWallContainer.style.display = 'none';
}

function fadeIn(element) {
  element.style.opacity = '1';
}

function fadeOut(element) {
  element.style.opacity = '0';
}

freedomWallTextarea.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault(); 
    freedomWallTextarea.value = ''; 
    coffee.style.backgroundImage = "url('coffee.png')";
      coffee.style.zIndex = '1';
      hideFreedomWall();;
  }
});

document.body.addEventListener('click', () => {
  freedomWallTextarea.value = ''; 
});
