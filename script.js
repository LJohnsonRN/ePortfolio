// toggle side navigation and rotate hamburger menu
let rotation = 0;
document.getElementById('menu-toggle').addEventListener('click', function() {
  const menu = document.getElementById('side-menu');
  menu.classList.toggle('show');
  if (rotation === 0) {
    rotation = -180;
  } else {
    rotation = 0;
  }
  this.style.transform = `rotate(${rotation}deg)`;
});

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    const menu = document.getElementById('side-menu');
    const hamburger = document.getElementById('menu-toggle');
    rotation = 0;
    hamburger.style.transform = `rotate(${rotation}deg)`;
    menu.classList.remove('show');
  });
});

// loads background on each page
function loadBackground() {
  fetch('background.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not okay: ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('background').innerHTML = data;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}
document.addEventListener('DOMContentLoaded', loadBackground);

// loads footer on each page
function loadFooter() {
  fetch('footer.html')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not okay: ' + response.statusText);
    }
    return response.text();
  })
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
}
document.addEventListener('DOMContentLoaded', loadFooter);
