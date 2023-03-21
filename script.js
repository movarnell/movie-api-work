

const posterURLBase = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

let title, overview, posterEndURL, releaseDate, aveRating, results, movie;
let movie_id = 0;

let movieArray = [];

fetch('https://api.themoviedb.org/4/list/8245331?api_key=a7f4e02bcc60ce2858b522e0406c75fc', {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
}).then(response => response.json())
    .then(function(response) {
        for(i=0;i<response.results.length ;i++){
        console.log(response);
        title = response.results[i].title;
        overview = response.results[i].overview;
        posterEndURL = response.results[i].poster_path;
        aveRating = response.results[i].vote_average;
        releaseDate = response.results[i].release_date;
        posterURL = posterURLBase+posterEndURL;
        movie = {title: title, releaseDate: releaseDate, overview: overview, rating: aveRating, posterURL: posterURL };
        movieArray[i]=movie;
        console.log(movie);
        console.log(posterEndURL, posterURLBase, posterURL)
        console.log(`Title: ${title}, Summary: ${overview}, Average Rating: ${aveRating}, Release Date: ${releaseDate}`)
        console.log(movieArray.length)
            }  
        ShowMeTheMoney();
    }
).catch(error => {
    console.error('Error:', error)});
console.log(movieArray.length)


let movieCard = ``;
function ShowMeTheMoney(){
for (let i=0; i < movieArray.length; i++) {
    console.log(movieArray[i])
movieCard = `<div class="col-lg-3 col-md-5 col-sm-12">
<div class="card shadow">
  <img src=${movieArray[i].posterURL} alt=${movieArray[i].title}></img>
  <div class="card-body h-100">
  <ul class="list-unstyled">
      <li><h1 class="text-center display-3">${movieArray[i].title}</h1></li>
      <li class="fw-bold">Released on ${movieArray[i].releaseDate}</li><br/>
      <li class="lead">${movieArray[i].overview}</li>
      <li class="fw-bolder lead">Average Rating: ${movieArray[i].rating}</li>
      <li></li>
  </ul>
  </div>
</div>
</div>`
   const moviesElement = document.querySelector('#movies');
moviesElement.innerHTML += movieCard;
}
}


// THIS CODE FORMATS FOR PULLING OUT FOR ARRAY WITH EACH PROPERTY
// let movieCard = ``;
// function ShowMeTheMoney(){
// for (let i=0; i < movieArray.length; i++) {
//     console.log(movieArray[i])
// movieCard = `<div class="col-lg-3 col-md-5 col-sm-12">
// <div class="card shadow">
// { 
//   title: "${movieArray[i].title}",
//  posterURL: "${movieArray[i].posterURL}",
//   releaseDate: ${movieArray[i].releaseDate},
//   overview: "${movieArray[i].overview}",
//   rating: ${movieArray[i].rating},
// }
//   </div>`;

//    const moviesElement = document.querySelector('#movies');
// moviesElement.innerHTML += movieCard;
// }
// }