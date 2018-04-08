$(document).ready(function () {

    var movies = ["Howard the Duck",
        "The Punisher ",
        "Captain America",
        "The Fantastic Four (1994)",
        "Blade",
        "X-Men",
        "Blade II",
        "Spider-Man",
        "Daredevil",
        "Hulk",
        "Spider-Man 2",
        "Blade: Trinity",
        "Elektra",
        "Man-Thing",
        "Fantastic Four",
        "X-Men: The Last Stand",
        "Ghost Rider",
        "Spider-Man 3",
        "Fantastic Four: Rise of the Silver Surfer",
        "Iron Man",
        "The Incredible Hulk",
        "Punisher: War Zone",
        "X-Men Origins",
        "Iron Man 2",
        "Thor",
        "X-Men: First Class",
        "Captain America: The First Avenger",
        "Ghost Rider: Spirit of Vengeance",
        "Avengers",
        "The Amazing Spider-Man",
        "Iron Man 3",
        "The Wolverine",
        "Thor: The Dark World",
        "Captain America: The Winter Soldier",
        "The Amazing Spider-Man 2",
        "X-Men: Days of Future Past",
        "Guardians of the Galaxy",
        "Big Hero 6",
        "Avengers: Age of Ultron",
        "Ant-Man",
        "Deadpool",
        "Captain America: Civil War",
        "X-Men: Apocalypse",
        "Doctor Strange",
        "Logan",
        "Guardians of the Galaxy Vol. 2",
        "Spider-Man: Homecoming",
        "Thor: Ragnarok",
        "Black Panther"];

    function displayMovieInfo() {

        // var movie = $(this).attr("data-name");

        for (var i = 0; i < movies.length; i++) {

            var movie = movies[i];
            var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
            var queryURL1 = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=AIzaSyC8th4wDxjLmTn1fONnkSMaUaGAGTUNQRA"

            // $.ajax({
            //     url: queryURL,
            //     method: "GET"
            // }).then(function (response) {

            //     var movieDiv = $("<div class='movie'>");

            //     var a = $("<h1>");

            //     a.addClass("movie-btn");
            //     a.attr("data-name", movies[i]);
            //     a.text(response.Title);

            //     movieDiv.append(a)

            //     var rating = response.Rated;
            //     var pOne = $("<p>").text("Rating: " + rating);

            //     movieDiv.append(pOne);

            //     var released = response.Released;
            //     var pTwo = $("<p>").text("Released: " + released);

            //     movieDiv.append(pTwo);

            //     var plot = response.Plot;
            //     var pThree = $("<p>").text("Plot: " + plot);

            //     movieDiv.append(pThree);

            //     var imgURL = response.Poster;
            //     var image = $("<img>").attr("src", imgURL);

            //     movieDiv.append(image);

            //     $(".container").prepend(movieDiv);
            // });

            $.ajax({
                url: queryURL1,
                method: "GET"
            }).then(function (response) {
                console.log(response);
            });

        }
    }
    displayMovieInfo();
    // Load the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // Replace the 'ytplayer' element with an <iframe> and
    // YouTube player after the API code downloads.
    var player;
    function onYouTubePlayerAPIReady() {
        player = new YT.Player('ytplayer', {
            height: '360',
            width: '640',
            videoId: 'vk0F8dHo3wU'
        });
    }

})