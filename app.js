const base_url = "https://api.jikan.moe/v3/anime/id/request/parameter";

function searchAnime(event) {
   event.preventDefault();
   const form = new FormData(this);
   const query = form.get("search");

   console.log(query);

   fetch(`${base_url}/search/anime?q$=${query}&page-1`)
   .then((res) => res.json())
   .then(data => res.json())
   .catch((err) => {
      console.log(err);
   })
}

function updateDom(data) {
   const searchResults = document.getElementById(`search-results`);
   const animeByCategory = data.results

   .reduce((acc, anime) => {
      const { type } = anime;
      if (acc[type] === undefined) acc[type] = [];
      acc[type].push(anime);
      return acc;
   }, {});

   searchResults.innerHTML = object.keys(animeByCategory).map(key => {
      const animeHTML = animeByCategory[key]
      .sort((a, b) => a.episodes - b.episodes)
      .map(anime => {
         return `
         <div class="card">
         <div class="card-image">
         <img src="${anime.image.url}">
         </div>
         <div class="card-content">
         <span class="card-title">${anime.title}</span>
         <p>${anime.synopsis}</p>
         </div>
         <div class="card-action">
         <ahref="${anime.utl}">Test</a>
         </div>
         </div>
         </div>
         </div>
         `
      }).join("");
      
      return `
         <section>
         <h3>${key.toUpperCase()}</h3>
         <div class="row">${animeHTML}</div>
         </section>
      `
   }).join("");
}

function pageLoaded() {
   const form =document.getElementById(`search_form`)
   form.addEventListener("submit", searchAnime);
}
window.addEventListener("load", pageLoaded);


fetch(`https://kitsu.io/api/edge/anime`)
   .then(function(res) {
      console.log(res.json())
   })



function myFunction() {
  var x = document.getElementById("mm");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
   
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000);
}

function myFunction3() { 
   
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-menu");
  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}