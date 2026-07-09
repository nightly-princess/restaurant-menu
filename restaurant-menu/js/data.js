const menuContainer = document.getElementById("menu-container");
console.log(menuContainer);

async function loadMenu() {
  const response = await fetch("data/menu.json");
  const menu = await response.json();
  return menu;
}

loadMenu().then((menu) => {
  console.log(menu.restaurant.name);
  console.log(menu.categories[0].dishes[0]);
});