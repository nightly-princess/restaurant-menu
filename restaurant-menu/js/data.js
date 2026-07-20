const menuContainer = document.getElementById("menu-container");

let currentLang = localStorage.getItem("lang") || "en";

async function loadMenu() {
  const response = await fetch("data/menu.json");
  const menu = await response.json();
  return menu;
}

function renderMenu(menu, lang) {
  menuContainer.innerHTML = "";
  
  menu.categories.forEach((category) => {
    const categoryHeading = document.createElement("h2");
    categoryHeading.className = "category-heading";
    categoryHeading.textContent = category.name[lang];
    menuContainer.appendChild(categoryHeading);

    category.dishes.forEach((dish) => {
      const dishCard = document.createElement("div");
      dishCard.className = "dish-card";

      const dishImage = document.createElement("img");
      dishImage.src = dish.image;
      dishImage.alt = dish.name[lang];

      const dishInfo = document.createElement("div");
      dishInfo.className = "dish-info";

      const dishName = document.createElement("h3");
      dishName.textContent = dish.name[lang];

      const dishDescription = document.createElement("p");
      dishDescription.className = "description";
      dishDescription.textContent = dish.description[lang];

      dishInfo.appendChild(dishName);
      dishInfo.appendChild(dishDescription);

      const dishPrice = document.createElement("p");
      dishPrice.className = "dish-price";
      dishPrice.textContent = dish.price.toLocaleString();

      dishCard.appendChild(dishImage);
      dishCard.appendChild(dishInfo);
      dishCard.appendChild(dishPrice);

      menuContainer.appendChild(dishCard);


      
    });
  });
}

const imageToggle = document.getElementById("toggle-images");

imageToggle.addEventListener("change", () => {
  menuContainer.classList.toggle("hide-images", !imageToggle.checked);
});

loadMenu().then((menu) => {
  renderMenu(menu, currentLang);

  const langButtons = document.querySelectorAll(".lang-switcher button");
  langButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentLang = button.dataset.lang;
      localStorage.setItem("lang", currentLang);
      renderMenu(menu, currentLang);
    });
  });
});