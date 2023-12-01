//local reviews data 
const reviews = [
{
    id: 1,
    name: "Sir Isaac Newton",
    job: "Polymath",
    img: "images/sir-isaac-newton.jpeg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lectus libero, viverra sit amet ante a, aliquet auctor nibh. Nullam tempor venenatis vulputate."

    },

 {
    id: 2,
    name: "François-Marie Arouet",
    job: "Author",
    img: "images/voltaire.jpg",
    text: "Aliquam non enim in justo finibus dignissim quis ut odio. Ut ut neque sit amet magna luctus mattis. Phasellus felis mi, placerat sit amet odio vitae, tempus tincidunt tortor."
    
 },

{
    id: 3,
    name: "Jonathan Swift",
    job: "Satirist",
    img: "images/swift.jpg",
    text: "Nulla luctus leo tortor, ut pellentesque orci auctor sed. In ac aliquet nibh. Vestibulum eget tellus dui. Etiam varius pretium mauris ut lacinia."
        
},

{
    id: 4,
    name: "John Locke",
    job: "Philosopher",
    img: "images/locke.jpeg",
    text: "Aliquam dictum dui ut dui tempus finibus. Maecenas sagittis cursus consectetur. Maecenas condimentum, felis ut imperdiet laoreet, libero lacus venenatis felis."
            
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

// load initial item 
window.addEventListener("DOMContentLoaded", function (){
  showPerson(currentItem);
});

// show person based on item

function showPerson(person){
    const item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener("click", function () {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
    currentItem--;
  console.log(currentItem)
  if (currentItem<=-1) {
    currentItem = 3;
}
showPerson(currentItem);
});




