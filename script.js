//local reviews data 
const reviews = [
{
    id: 1,
    name: "susan smith",
    job: "butcher",
    img: "images/sir-isaac-newton.jpeg",
    text: "En diciembre empieza la temporada fuerte de turismo en la ciudad del Pacífico mexicano, pero este año será muy diferente, aunque ya están empezando a llegar los primeros visitantes."

    },

 {
    id: 1,
    name: "brock adams",
    job: "web developer",
    img: "images/galileo_sustermans.thumbnail-3.jpg",
    text: "En diciembre empieza la temporada fuerte de turismo en la ciudad del Pacífico mexicano, pero este año será muy diferente, aunque ya están empezando a llegar los primeros visitantes."
    
 },

{
    id: 1,
    name: "greg dale",
    job: "fire fighter",
    img: "images/Thomas_Hobbes.jpeg",
    text: "En diciembre empieza la temporada fuerte de turismo en la ciudad del Pacífico mexicano, pero este año será muy diferente, aunque ya están empezando a llegar los primeros visitantes."
        
},

{
    id: 1,
    name: "steve mckay",
    job: "farmer",
    img: "images/download (1).jpeg",
    text: "En diciembre empieza la temporada fuerte de turismo en la ciudad del Pacífico mexicano, pero este año será muy diferente, aunque ya están empezando a llegar los primeros visitantes."
            
}

]

// select items
const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info  = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// set starting item 
let currentItem = 0;

