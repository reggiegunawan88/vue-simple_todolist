<template>
  <div class="container">
    <div class="row my-3 justify-content-between">
      <h3 v-if="!editing">{{ todo.title }}</h3>
      <input v-else type="text" class="col form-control mx-3" />
      <div class="div">
        <button @click="edit_toDo" class="btn btn-success mx-3">Edit</button>
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
    };
  },
  methods: {
    ...mapActions(["delete_toDo"]),
  },
};
</script>

<style>
</style>