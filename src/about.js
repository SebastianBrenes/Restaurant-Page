
export default function loadAboutPage() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    let subtitle1 = document.createElement('h2');
    subtitle1.setAttribute("id", "about-us");
    subtitle1.innerText = "About Us";
    content.appendChild(subtitle1);

    let about = document.createElement('section');
    about.setAttribute("id", "sectionAbout");
    about.innerHTML = `
        <p>Welcome to Don Mario's, where we bring the magic of the Mushroom Kingdom to your plate! Established in 2024, our mission is to deliver the most delightful pizzas with ingredients that would make even Bowser envious.</p>
        <p>Our team of skilled chefs, led by the legendary Chef Mario, combines traditional Italian recipes with the whimsical flavors of the Mushroom Kingdom to craft pizzas that are truly super. From our signature Mushroom Kingdom Margherita to the famous Koopa Pepperoni, each slice is an adventure in taste.</p>
        <p>At Don Mario's, we believe in providing an extraordinary dining experience. Our Mario-themed decor, friendly staff, and unique menu will transport you straight to the world of Mario and Luigi. Whether you're dining in or taking out, we're here to make every meal a power-up.</p>
        <p>Join us for a taste that's truly super. We look forward to serving you!</p>
    `;
    content.appendChild(about);

    let subtitle2 = document.createElement('h2');
    subtitle2.setAttribute("id", "contact-us");
    subtitle2.innerText = "Contact Us";
    content.appendChild(subtitle2);

    let contact = document.createElement('section');
    contact.setAttribute("id", "sectionContact");
    contact.innerHTML = `
        <p>Have questions or want to place an order? Reach out to us:</p>
        <ul>
            <li>Phone: 1-800-MARIO-PIES</li>
            <li>Email: info@donmarios.com</li>
            <li>Address: 123 Mushroom Kingdom Lane, Princess Peach's Castle, Toad Town</li>
        </ul>
        <p>Follow us on social media for the latest updates and special offers!</p>
    `;
    content.appendChild(contact);
}