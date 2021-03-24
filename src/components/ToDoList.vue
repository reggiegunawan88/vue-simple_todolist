<template>
  <div>
    <div v-if="obj_todo.length == 0">
      <h3>No to-do-list exist</h3>
    </div>
    <div v-else v-for="todo in allToDoItems" :key="todo.id">
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
  computed: {
    ...mapGetters(["allToDoItems"]),
  },
  data() {
    return {
      obj_todo: this.$store.state.toDoItems,
    };
  },
  created: function () {
    console.log(this.obj_length);
  },
};
</script>

<style>
</style>