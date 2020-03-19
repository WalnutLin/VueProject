import Home from "./pages/Home.js";
import Movie from "./pages/Movie.js";
import MovieList from "./pages/MovieList.js";

export default new VueRouter({
  mode: "hash",
  routes: [
    {
      name: "home",
      path: "/",
      component: Home
    },
    {
      name: "movie-list",
      path: "/movielist",
      component: MovieList
    },
    {
      name: "movie-detail",
      path: "/movie/:id",
      component: Movie
    }
  ]
});
