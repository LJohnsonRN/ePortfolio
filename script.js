document.getElementById('menu-toggle').addEventListener('click', function() {
  const menu = document.getElementById('side-menu');
  menu.classList.toggle('show');
});

const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
  item.addEventListener('click', function() {
    const menu = document.getElementById('side-menu');
    menu.classList.remove('show');
  });
});