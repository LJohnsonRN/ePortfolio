let rotation = 0;
const menu = document.getElementById('side-menu');
const hamburger = document.getElementById('menu-toggle');
const menuItems = document.querySelectorAll('.menu-item');

function rotateHamburger() {
  if (rotation === 0) {
    rotation = -180
  } else {
    rotation = 0
  }
  hamburger.style.transform = `rotate(${rotation}deg)`;
}

function toggleMenu() {
  if (menu.classList.contains('show')) {
    menu.classList.remove('show');
  } else {
    menu.classList.toggle('show');
  }
}

// toggle side navigation and rotate hamburger menu
const menuFunctions = [rotateHamburger, toggleMenu];
menuFunctions.forEach (func => {
  hamburger.addEventListener('click', func);
});
menuItems.forEach(item => {
  menuFunctions.forEach(func => {
    item.addEventListener('click', func);
  });
});
document.addEventListener('click', function(event) {
  if (menu.classList.contains('show')
  && ! menu.contains(event.target)
  && event.target !== hamburger) {
    rotateHamburger();
    toggleMenu();
  }
});

function loadChunk(chunk) {
  fetch(chunk + '.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not okay: ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById(chunk).innerHTML = data;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}

// load external HTML chunks
const htmlChunks = ['background', 'footer'];
htmlChunks.forEach (chunk => {
  document.addEventListener('DOMContentLoaded', loadChunk(chunk));
});
