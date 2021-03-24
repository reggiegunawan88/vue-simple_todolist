<template>
  <div class="container">
    <div class="row my-5">
      <input
        @change="update_text"
        v-bind:value="todo_text"
        class="form-control col mx-3"
        type="text"
      />
      <button @click="add_todoObj" class="btn btn-primary"><b>ADD</b></button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  data() {
    return {
      todo_text: "",
    };
  },
  methods: {
    ...mapActions(["add_toDo"]),
    update_text(e) {
      this.todo_text = e.target.value;
    },
    add_todoObj() {
      if (this.todo_text == "") {
        alert("Fill the input");
      } else {
        this.add_toDo({
          id: v1(),
          title: this.todo_text,
        }); //vuex action
        this.todo_text = "";
      }
    },
  },
};
</script>

<style>
</style>