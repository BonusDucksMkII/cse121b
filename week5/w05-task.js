/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList =[];

/* async displayTemples Function */
// Weird 'spread' operator to declear an array? Evil magic
const displayTemples = (...templeList) => {
    templeList.forEach((templeInfo) => {
        templeInfo.forEach((temple) => {
            // console.log(temple.templeName);
            let newArticle = document.createElement("article");
            let newHeader = document.createElement("h3");
            let newImg = document.createElement("img");

            newHeader.innerHTML = temple.templeName;
            newImg.setAttribute("src", temple.imageUrl);
            newImg.setAttribute("alt", temple.location);

            newArticle.appendChild(newHeader);
            newArticle.appendChild(newImg);
            templesElement.appendChild(newArticle);
        })
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok){
        templeList = await response.json();
        displayTemples(templeList);
    }
}

/* reset Function */
function reset(){
    document.getElementById("temples").innerHTML = "";
}

/* filterTemples Function */
function filterTemples(temples){
    reset();
    let filter = document.getElementById("filtered");
    switch(filter.value) {
        case "utah":
            displayTemples(temples.filter((temple) => {
                if (temple.location.includes("Utah")){
                    return true;
                }})
             );
        case "notutah":
            displayTemples(temples.filter((temple) => {
                if (temple.location.includes("Utah")){
                    return false;
                } else {
                    return true;
                }})
             );
            break;
        case "older":
            displayTemples(temples.filter((temple) => {
                if (parseInt(temple.dedicated) <= 1950){
                    return true;
                }})
             );
            break;
        case "all":
            displayTemples(temples);
            break
    }
}

getTemples();

/* Event Listener */

document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });
