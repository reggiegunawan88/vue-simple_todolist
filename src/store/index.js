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
    delete_toDo({ commit }, id) {
      commit("delete_toDo", id);
    },
    edit_toDo({ commit }, todo) {
      commit("edit_toDo", todo);
    },
  },
  mutations: {
    add_toDo(state, todo) {
      state.toDoItems.push(todo);
      localStorage.setItem("todolist_data", JSON.stringify(state.toDoItems));
      console.log(state.toDoItems);
    },
    delete_toDo(state, id) {
      state.toDoItems = state.toDoItems.filter((todo) => todo.id != id);
    },
    edit_toDo(state, todo) {
      let index = state.toDoItems.findIndex((item) => item.id == todo.id);
      console.log(index);
    },
  },
  modules: {},
});
