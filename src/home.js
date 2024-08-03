
export default function loadHomePage() {
    const content = document.getElementById('content');
    content.innerHTML = "";

    let title = document.createElement('h1');
    title.innerText = "Don Mario's";
    content.appendChild(title);

    let info = document.createElement('section');
    info.setAttribute("id", "sectionInfo");
    info.innerHTML = `
    <p>Don Mario's has a long story of destruction, revenge, love and more important... pizza</p>
    <p>We make the best pizza in the entire world, that's why we have won several awards like "The most outstanding pizza award" and "The pizzeria of heart attacks"</p>
    `;

    let schedule = document.createElement('section');
    schedule.setAttribute("id", "sectionSchedule");
    schedule.innerHTML = `
    <h3>Monday to Thursday:</h3>
    <p>11:00 AM - 10:00 PM</p>
    <h3>Friday and Saturday:</h3>
    <p>11:00 AM - 11:00 PM</p>
    <h3>Sunday:</h3>
    <p>12:00 PM - 9:00 PM</p>
    `;

    let location = document.createElement('section');
    location.setAttribute("id", "sectionLocation");
    location.innerHTML = `
    <h2>Location</h2>
    <h4>23 Mushroom Kingdom Lane, Princess Peach's Castle, Toad Town</h4>
    `;

    content.appendChild(info);
    content.appendChild(schedule);
    content.appendChild(location);

}