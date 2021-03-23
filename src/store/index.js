import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    toDoItems: [],
  },
  getters: {
    allToDoItems: (state) => state.toDoItems,
  },
  actions: {
    add_toDo({ commit }, todo) {
      commit("add_toDo", todo);
    },
  },
  mutations: {
    add_toDo(state, todo) {
      state.toDoItems.push(todo);
      console.log(state.toDoItems);
    },
  },
  modules: {},
});
