<template>
  <div class="w-screen  overflow-hidden">
    <Beer />
  </div>
</template>

<script>
import Beer from "./components/Beer.vue";

export default {
  name: "App",
  components: {
    Beer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
