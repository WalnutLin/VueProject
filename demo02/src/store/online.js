export default {
  namespaced: true,
  state: {
    number: 0
  },
  mutations: {
    increase(state) {
      state.number++;
    },
    decrease(state) {
      if (state.number == 0) {
        return;
      }
      state.number--;
    }
  },
  actions: {
    asyncIncrease(context) {
      setTimeout(() => {
        context.commit("increase");
      }, 1000);
    },
    asyncDecrease(context) {
      setTimeout(() => {
        context.commit("decrease");
      }, 1000);
    }
  }
};
