export default function loadMenuPage() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    let title = document.createElement('h1');
    title.innerText = "Menu";
    content.appendChild(title);

    // first section - Pizzas
    let sectionPizza =  document.createElement('section');
    sectionPizza.setAttribute("id", "section-pizza");
    content.appendChild(sectionPizza)

    sectionPizza.innerHTML = `
        <h2>Pizzas</h2>
        <div class="meal">
            <p class="meal-name">Mushroom Kingdom Margherita</p>
            <p class="description">Fresh mozzarella, basil, and a hint of Toad's secret tomato sauce.</p>
            <p class="price">Price: $12.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">Koopa Pepperoni</p>
            <p class="description">Classic pepperoni with a spicy twist that would make Bowser proud.</p>
            <p class="price">Price: $14.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">Luigi's Veggie Delight</p>
            <p class="description">A mix of mushrooms, bell peppers, onions, and olives, perfect for the green-loving hero.</p>
            <p class="price">Price: $12.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">Princess Peach's Special</p>
            <p class="description">A sweet and savory combination of peaches, prosciutto, and arugula.</p>
            <p class="price">Price: $15.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">Yoshi's Egg-cellent Pizza</p>
            <p class="description">Topped with quail eggs, spinach, and feta cheese for a unique flavor experience.</p>
            <p class="price">Price: $16.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">Bowser's Fiery BBQ Chicken</p>
            <p class="description">Spicy BBQ chicken with red onions and cilantro, bringing the heat from Bowser's Castle.</p>
            <p class="price">Price: $17.99</p>
        </div>
    `;



    // second section - Sides
    let sectionSides =  document.createElement('section');
    sectionSides.setAttribute("id", "section-sides");
    content.appendChild(sectionSides);

    sectionSides.innerHTML = `
        <h2>Sides</h2>

        <div class="meal">
            <p class="meal-name">Fire Flower Fries</p>
            <p class="description">Crispy fries with a spicy kick, served with a special dipping sauce.</p>
            <p class="price">Price: $4.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">1-Up Mushroom Salad</p>
            <p class="description">A fresh garden salad with mixed greens, cherry tomatoes, cucumbers, and a balsamic vinaigrette.</p>
            <p class="price">Price: $7.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">Super Star Garlic Bread</p>
            <p class="description">Golden garlic breadsticks sprinkled with parmesan.</p>
            <p class="price">Price: $5.99</p>
        </div>
    `;



    // third section - Desserts
    let sectionDesserts =  document.createElement('section');
    sectionDesserts.setAttribute("id", "section-desserts");
    content.appendChild(sectionDesserts);

    sectionDesserts.innerHTML = `
        <h2>Desserts</h2>

        <div class="meal">
            <p class="meal-name">Mario's Gelato</p>
            <p class="description">Creamy gelato in a variety of flavors: Vanilla, Chocolate, Strawberry, and Pistachio.</p>
            <p class="price">Price: $4.99 per scoop</p>
        </div>

        <div class="meal">
            <p class="meal-name">Power-Up Cannoli</p>
            <p class="description">Classic Italian cannoli filled with sweet ricotta and chocolate chips.</p>
            <p class="price">Price: $6.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">Princess Peach's Pastries</p>
            <p class="description">Delicious peach-filled pastries dusted with powdered sugar.</p>
            <p class="price">Price: $7.99</p>
        </div>
    `;


    // fourth section - Beverage
    let sectionBeverage =  document.createElement('section');
    sectionBeverage.setAttribute("id", "section-beverages");
    content.appendChild(sectionBeverage);

    sectionBeverage.innerHTML = `
        <h2>Beverages</h2>

        <div class="meal">
            <p class="meal-name">Mario's Special Lemonade</p>
            <p class="description">A refreshing lemonade with a twist of Mario's secret ingredient.</p>
            <p class="price">Price: $3.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">Luigi's Green Tea</p>
            <p class="description">Iced green tea with a hint of mint, perfect for cooling off.</p>
            <p class="price">Price: $3.99</p>
        </div>

        <div class="meal">
            <p class="meal-name">Power-Up Smoothies</p>
            <p class="description">Choose from Banana, Berry, or Tropical flavors for a healthy boost.</p>
            <p class="price">Price: $5.99</p>
        </div>
    `;

}