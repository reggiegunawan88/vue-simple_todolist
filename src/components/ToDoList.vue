<template>
  <div>
    <!-- <div v-if="obj_length == 0">
      <h3>No to-do-list exist</h3>
    </div> -->
    <div v-for="todo in allToDoItems" :key="todo.id">
      <ToDoItem :todo="todo" />
    </div>
  </div>
</template>

<script>
import ToDoItem from "./ToDoItem";
import { mapGetters } from "vuex";

export default {
  components: {
    ToDoItem,
  },
  created: function () {
    console.log("test");
  },
  computed: {
    ...mapGetters(["allToDoItems"]),
    obj_length(state) {
      console.log("state is empty");
      return Object.keys(state.toDoItems).length;
    },
  },
};
</script>

<style>
</style>