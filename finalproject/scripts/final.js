const jsonFmt = "&fmt=json";
const baseUrlString = "./scripts/chopin.json";
// "https://musicbrainz.org/ws/2";

const submitButton = document.querySelector("#test");
const inputArtist = document.querySelector("#artist");
const limitList = document.querySelector("#limit");
inputArtist.value = "Chopin";

async function fetchUrl(urlString){
    const response = await fetch(urlString);
    if (response.ok){
        const data = await response.json();
        console.log("done");

        const workArray = [];
        const workList = document.createElement("ul");
        document.body.appendChild(workList);
        
        if (limitList.value === "50"){
            for (let i = 0; i <= 50; i++){
                const newListElement = document.createElement("li");
                newListElement.innerText = data.relations[i].work.title;
                workList.appendChild(newListElement);
            }
            console.log("50");
        } else if (limitList.value === "100"){
            for (let i = 0; i <= 100; i++){
                const newListElement = document.createElement("li");
                newListElement.innerText = data.relations[i].work.title;
                workList.appendChild(newListElement);
            }
            console.log("100");
        } else {
            for (entry in data.relations){
                const newListElement = document.createElement("li");
                newListElement.innerText = data.relations[entry].work.title;
                workList.appendChild(newListElement);
            }
        }  
    }
}

submitButton.addEventListener("click", () => {
    fetchUrl(baseUrlString);
});


// function searchUrl(entity, query, limit, offset) {
//     if (limit) {

//     }
//     return `${baseUrlString}/${entity}?=${query}`;
// }

// function lookupUrl(){
//     return `${baseUrlString}/${entity}`;    
// }
