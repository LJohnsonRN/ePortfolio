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
    menu.classList.remove('show');
  });
});
