<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <TaskManager/>
    <TaskForm/>
  </div>
</template>

<script>
import TaskManager from './components/TaskManager.vue'
import TaskForm from './components/TaskForm.vue';


export default {
  name: 'App',
  components: {
    TaskManager,
    TaskForm
  }
}
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
