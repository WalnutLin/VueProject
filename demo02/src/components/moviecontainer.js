import MovieList from "./movielist.js";
import Pager from "./Pager.js";
import Loading from "./Loading.js";
var template = `
  <div>
    <movie-list :movies="data"/>
    <Pager @page-change="handlePageChange" :total="total" :current="page" :limit="limit"/>
    <Loading :isShow="isLoading"/>
  </div>  
`;

export default {
  components: {
    MovieList,
    Pager,
    Loading
  },
  async created() {
    this.getMovies();
  },
  computed: Vuex.mapState("movies", [
    "page",
    "total",
    "limit",
    "data",
    "isLoading"
  ]),
  methods: {
    handlePageChange(newPage) {
      this.$store.commit("movies/setPage", { page: newPage });
      this.getMovies();
    },
    getMovies() {
      this.$store.dispatch("movies/fetchMovies");
    }
  },
  template
};
