const menuContainer = document.getElementById("menu-container");
console.log(menuContainer);

async function loadMenu() {
  const response = await fetch("data/menu.json");
  const menu = await response.json();
  return menu;
}

loadMenu().then((menu) => {
  menu.categories.forEach((category) => {
    category.dishes.forEach((dish) => {
      const dishDiv = document.createElement("div");

      const dishName = document.createElement("h3");
      dishName.textContent = dish.name.en;

      dishDiv.appendChild(dishName);

      menuContainer.appendChild(dishDiv);
    });
  });
});