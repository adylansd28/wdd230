const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
let prophets = [];

fetch(requestURL)
.then(function (response) {
return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
});

function displayProphets(prophet) {
    let card = document.createElement('section');
    let heading = document.createElement('h2');
    let photo = document.createElement('img');
    let birthDate = document.createElement('p');
    let birthPlace = document.createElement('p');

    heading.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    photo.setAttribute('src', prophet.imageurl);
    photo.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);

    card.appendChild(heading);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(photo);
    
    document.querySelector('div.cards').appendChild(card);
};