import loadHomePage from './home.js'
import loadMenuPage from './menu.js'
import loadAboutPage from './about.js'


loadHomePage();


const tabs = document.getElementById('navButtons');
tabs.addEventListener('click', (e) => {
    const target = e.target;

    switch (target.id) {
        case "homeButton":
            loadHomePage();
            break;

        case "menuButton":
        loadMenuPage();
        break;

        case "aboutButton":
        loadAboutPage();
        break;
    }
})


