// loops.js
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
      {
        place: "Rexburg, ID",
        length: "5 years",
      },
      {
        place: "Ammon, ID",
        length: "3 years",
      },
      {
        place: "Sandy, UT",
        length: "1 year",
      },
    ],
  };

let foods = document.getElementById("favorite-foods");
let newElement;

for (let food in myInfo.favoriteFoods){
    // console.log(myInfo.favoriteFoods[food]);
    newElement = document.createElement("li");
    newElement.innerText = myInfo.favoriteFoods[food];
    foods.appendChild(newElement);
}