<template>
  <div class="container">
    <div class="row my-3 justify-content-between">
      <h4>{{ todo.title }}</h4>
      <div class="div">
        <button class="btn btn-success mx-3">Edit</button>
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todo: {},
  },
};
</script>

<style>
</style>