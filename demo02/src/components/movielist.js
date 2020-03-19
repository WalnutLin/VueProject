import Movie from "./movie.js";

var template = `
    <div class="data-container">
        <Movie :movie="item" v-for="item in movies" :key="item._id"/>
    </div>
`;
export default {
  components: {
    Movie: Movie
  },
  props: ["movies"],
  template: template
};
