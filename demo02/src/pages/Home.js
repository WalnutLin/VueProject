export default {
  template: `<div style="padding:100px">
      <h1>在线人数：{{number}}</h1>
      <button @click="add">增加</button>
      <button @click="reduce">减少</button>
      <button @click="asyncAdd">异步增加</button>
      <button @click="asyncReduce">异步减少</button>
      <div>
        <h1>电影页码:{{page}}</h1>
        <button @click="addPage">增加页码</button>
      </div>
    </div>`,
  computed: {
    number() {
      return this.$store.state.online.number;
    },
    page() {
      return this.$store.state.movies.page;
    }
  },
  created() {
    console.log(this.$store);
  },
  methods: {
    add() {
      this.$store.commit("online/increase");
    },
    reduce() {
      this.$store.commit("online/decrease");
    },
    asyncAdd() {
      this.$store.dispatch("online/asyncIncrease");
    },
    asyncReduce() {
      this.$store.dispatch("online/asyncDecrease");
    },
    addPage() {
      this.$store.commit({
        type: "movies/setPage",
        page: this.page + 1
      });
    }
  }
};
