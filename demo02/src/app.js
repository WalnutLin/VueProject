var template = `
    <div>
      <header>
        <router-link :to="{name:'home'}">首页</router-link>
        <router-link :to="{name:'movie-list'}">电影页</router-link>
        <span style="float:right; line-height:40px; margin-right:50px">在线人数：{{number}}</span>
      </header>
      <router-view />
    </div>
`;

export default {
  template,
  computed: Vuex.mapState("online", ["number"]),
  methods: {
    back() {
      this.$router.back();
    }
  }
};
