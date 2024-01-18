/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jonathan Todd";
let currentYear = 2024;
let profilePicture = "images/jtodd_small.jpg";
let food = ["Sandwiches", "Sushi", "Chocolate"];
let anotherFood = "Lasanga";

/* Step 3 - Element Variables */
let nameElement = document.getElementById('name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imgElement = document.querySelector('img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imgElement.setAttribute("src", "images/jtodd_small.jpg");
imgElement.setAttribute("alt", "Profile image of Jonathan Todd");
foodElement.innerHTML = `${food}`;
food.push(anotherFood);
foodElement.innerHTML += `<br>${food}`;
food.shift();
foodElement.innerHTML += `<br>${food}`;
food.pop();
foodElement.innerHTML += `<br>${food}`;


/* Step 5 - Array */






