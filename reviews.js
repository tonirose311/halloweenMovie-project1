var halloweenMovies = [
    {
        title: "Black Box",
        id: 716258
    },
    {
        title: "Possessor",
        id: 435615
    },
    {
        title: "Prevenge",
        id: 395982
    },
    {
        title: "Alive",
        id: 492414
    },
    {
        title: "Velvet Buzzsaw",
        id: 463684
    },
    {
        title: "The Invisible Man",
        id: 570670
    },
    {
        title: "Color Out of Space",
        id: 522565
    },
    {
        title: "In Fabric",
        id: 475220
    },
    {
        title: "Await Further Instructions",
        id: 505063
    },
    {
        title: "Bird Box",
        id: 405774
    },
    {
        title: "Train to Busan",
        id: 396535
    },
    {
        title: "A Quiet Place",
        id: 447332
    },
    {
        title: "I Remember You",
        id: 423236
    },
    {
        title: "It Comes at Night",
        id: 418078
    },
    {
        title: "Scream 4",
        id: 41446
    },
    {
        title: "10 Cloverfield Lane",
        id: 333371
    },
    {
        title: "The Shining",
        id: 694
    },
    {
        title: "It Follows",
        id: 270303
    },
    {
        title: "Doctor Sleep",
        id: 501170
    },
    {
        title: "The Grudge",
        id: 465086
    },
    {
        title: "The Addams Family",
        id: 481084
    },
    {
        title: "Hereditary",
        id: 493922
    },
    {
        title: "Get Out",
        id: 419430
    },
    {
        title: "A Nightmare On Elm Street",
        id: 23437
    },
    {
        title: "The Texas Chainsaw Massacre",
        id: 10781
    },
    {
        title: "Drag Me to Hell",
        id: 16871
    },
    {
        title: "The Babadook",
        id: 242224
    },
    {
        title: "It Chapter Two",
        id: 474350
    },
    {
        title: "The Wretched",
        id: 605804
    },
    {
        title: "Books of Blood",
        id: 715123
    },      
    {
        title: "The Nun",
        id: 439079
    },
]



$(document).ready(function () {
$(".sidenav").sidenav()

for (var i =0; i< halloweenMovies.length; i++) {
    $("#movieOptions").append(
        `<option value="${halloweenMovies[i].id}">${halloweenMovies[i].title}</option>`
    )
}
$("#movieOptions").on("change", function(event) {
    
    var movieTitle = $("#movieOptions option:selected").text().trim();


var nytURL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=" + movieTitle + "&api-key=bFTiVIHnCvfTfqcozyNdlYBGsf2Q5AkL"

$.ajax({
url: nytURL,
method: "GET"
}).then(function(response) {
var link = $("<a>");
newDiv = $("<div>")
var articleReview = response.results[0].link.url
var filmName = response.results[0].display_title;

link.attr("href", articleReview)
    link.text(filmName + " Review: " + (articleReview));
    $("#article-view").append(newDiv);
    newDiv.append(link)


localStorage.setItem("link", link);
localStorage.getItem("link");



});

var empty = $("#article-view").empty();
$("#movieOptions").on("change", empty);





});





$('select').formSelect();

});