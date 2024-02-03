/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let profile = {
    'firstName':'Jonathan',
    'lastName':'Todd',
    'photo':'images/jtodd_small.jpg',
    'favoriteFoods':['Sandwiches', 'Sushi', 'Chocolate', 'Lasanga'],
    'hobbies':['Piano','Games','Learning'],
    'placesLived':[]
};

/* Populate Profile Object with placesLive objects */
profile.placesLived.push(
    {
        'place':['Salt Lake City', 'West Jordan', 'Riverton'],
        'length':['4 years', '18 years', '3 years']
    }
);

/* DOM Manipulation - Output */
let nameHTML = document.getElementById('name');
let pic = document.getElementById('photo');
let foods = document.getElementById('favorite-foods');
let hobbies = document.getElementById('hobbies');
let places = document.getElementById('places-lived');

let newElement;

/* Name */
nameHTML.innerHTML = `${profile.firstName} ${profile.lastName}`;
/* Photo with attributes */
pic.setAttribute('src', profile.photo);

/* Favorite Foods List*/
for (let food in profile.favoriteFoods){
    newElement = document.createElement('li');
    newElement.innerText = profile.favoriteFoods[food];
    foods.appendChild(newElement);
}

/* Hobbies List */
for (let hobby in profile.hobbies){
    newElement = document.createElement('li');
    newElement.innerText = profile.hobbies[hobby];
    hobbies.appendChild(newElement);
}

/* Places Lived DataList */
for (let i = 0; i < 3; i++){
    newElement = document.createElement('dt');
    newElement.innerText = `${profile.placesLived[0].place[i]}`;
    places.appendChild(newElement);
    newElement = document.createElement('dd');
    newElement.innerText = `${profile.placesLived[0].length[i]}`;
    places.appendChild(newElement);
}










