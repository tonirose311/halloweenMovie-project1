$(document).ready(function () {
    $(".sidenav").sidenav()

// halloweenMovies is an array of objects which include a movie title and corresponding id from Movie DB
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
    
    // get called when day is clicked
    function displayModal(event) {
      console.log("clicked");

      // get day num from link that was clicked
      dayNum = $(event.target).text(); // 1, 14, 16, 

      // get the movie for the day (get the movie info from the api)
      let movie = halloweenMovies[dayNum - 1]; //

      // get description from api
      var key = "5cd9cd33ad712f6503fc158c547b1621";
      let id = movie.id;
      var queryURL = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + key;

      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function (response) {
        console.log(response);
        // fill in modal with response data
        let overview = response.overview;
        let modalParagraph = $("#modal1 p");
        modalParagraph.text(overview);

        let picturePath = response.poster_path
        let pictureEl = $("#poster");
        pictureEl.attr("src", "https://image.tmdb.org/t/p/original/" + picturePath)
        $('#poster').width(200); 
    
      })

      // fill in the modal text with movie info
      let modalHeader = $("#modal1 h4");
      modalHeader.text(movie.title);

      // display the modal
      $('#modal1').modal();
    }

    let dayLinks = $("a.modal-trigger");
    dayLinks.on("click", displayModal);

  });