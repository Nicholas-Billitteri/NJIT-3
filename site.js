/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/

const vue_app = new Vue({
  el: "#vue_app",
  // This automatically imports movies.json file and puts it into
  //   the variable: movies
  created() {
    fetch("movies.json")
      .then((response) => response.json())
      .then((json) => {
        this.movies = json;
      });
  },
  data: {
    // This holds your movies.json data.
    movies: [],

    /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
  },
  methods: {
    /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */

    //Increase like button by 1 when clicked
    addLike: function (movie) {
      movie.likes++;
      console.log("movie likes: " + movie.likes);
    },

    //Decrease like button by 1 when clicked
    decreaseLike: function (movie) {
      movie.dislikes--;
      console.log("movie dislikes: " + movie.dislikes);
    },

    //Update poster when clicked
    posterClick: function (movie, index) {
      var moviePostersLength = movie.posters.length;

      if (movie.posterindex < 0) {
        movie.posterindex += moviePostersLength;
      }

      if (movie.posterindex < moviePostersLength - 1) {
        movie.posterindex++;
      } else {
        movie.posterindex = 0;
      }

      console.log(
        "index: " + movie.posterindex + " movie posters: " + moviePostersLength
      );
    },
  },

  filters: {
    //convert poster date to USA date
    makeTextDate: function (movie) {
      // return moment(date).format('MMMM Do YYYY, h:mm:ss a');
      var date = movie.released;
      console.log(movie.title + ": " + date);
      return moment(String(date)).format("MMMM D, YYYY");
    },

    //covert runtime to hrs and minutes
    timeText: function (movie) {
      var time = movie.runtime;
      return Math.floor(time / 60) + "h " + (time % 60) + "m";
    },
  },
});

const app_header = new Vue({
  el: "#app_title",
  data: {
    title: "IMDB + Nicholas's Top 8 Movies",
  },
});

const app_footer = new Vue({
  el: "#github",
  data: {
    owner: "Nicholas Billitteri",
    github: "https://github.com/Nicholas-Billitteri/NJIT-3",
  },
});
