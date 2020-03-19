export default {
  async getMovies(page, limit) {
    return new Promise(resolve => {
      setTimeout(async () => {
        var url = `http://yuanjin.tech:5005/api/movie?page=${page}&limit=${limit}`;
        var datas = await fetch(url).then(resp => resp.json());
        resolve(datas);
      }, 1000);
    });
  },
  async getMovie(id) {
    return new Promise(resolve => {
      setTimeout(async () => {
        var url = `http://yuanjin.tech:5005/api/movie/${id}`;
        var datas = await fetch(url).then(resp => resp.json());
        resolve(datas);
      }, 1000);
    });
  }
};
