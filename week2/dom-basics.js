const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with JavaScript!";
document.body.appendChild(newParagraph);

const newImage = document.createElement("img");
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute("alt", "Description of image");
document.body.appendChild(newImage);

const newSection = document.createElement("section");
const newHeader = document.createElement("h2");
newSection.appendChild(newHeader);
const newParagraph2 = document.createElement("p");
newParagraph2.innerText = "Welcome to Javascript Language";
newSection.appendChild(newParagraph2);
document.body.appendChild(newSection);