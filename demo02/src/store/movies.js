import movieService from "../service/movieService.js";

export default {
  namespaced: true,
  state: {
    data: [],
    total: 0,
    page: 1,
    limit: 3,
    isLoading: false
  },
  mutations: {
    setPage(oldState, payload) {
      oldState.page = payload.page;
    },
    setResp(oldState, payload) {
      oldState.data = payload.data;
      oldState.total = payload.total;
    },
    setLoading(oldState, payload) {
      oldState.isLoading = payload.isLoading;
    }
  },
  actions: {
    async fetchMovies(context) {
      context.commit("setLoading", { isLoading: true });
      var resp = await movieService.getMovies(
        context.state.page,
        context.state.limit
      );
      context.commit("setPage", { data: resp.data, total: resp.count });
      context.commit("setLoading", { isLoading: false });
    }
  }
};
