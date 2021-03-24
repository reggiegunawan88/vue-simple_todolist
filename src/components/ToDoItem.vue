<template>
  <div class="container">
    <div class="row mx-2 my-3 justify-content-between">
      <h3 v-if="!editing">{{ todo.title }}</h3>
      <input
        v-else
        @change="update_text"
        v-bind:value="todo_text"
        type="text"
        class="col form-control mx-3"
      />

      <div class="div">
        <button @click="update_toDo(todo)" class="btn btn-success mx-3">
          {{ editing ? "Update" : "Edit" }}
        </button>
        <button @click="delete_toDo(todo.id)" class="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    todo: {},
  },
  data() {
    return {
      editing: false,
      todo_text: "",
    };
  },
  methods: {
    ...mapActions(["delete_toDo", "edit_toDo"]),
    update_toDo(todo) {
      this.editing = !this.editing;
      if (this.editing) {
        this.todo_text = todo.title;
        this.edit_toDo(todo); //vuex action
      } else {
        todo.title = this.todo_text;
      }
    },
    update_text(e) {
      this.todo_text = e.target.value;
    },
  },
};
</script>

<style>
</style>