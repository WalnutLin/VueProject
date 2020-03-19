import App from "./app.js";
import router from "./router.js";
import store from "./store/index.js";

new Vue({
  components: {
    App
  },
  store,
  router,
  el: "#app",
  template: `<App/>`
});
