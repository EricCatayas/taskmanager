<template>
  <div class="task-form">
    <h2>Add a New Task</h2>
    <form @submit.prevent="addTask">
      <div>
        <label for="title">Task Title:</label>
        <input type="text" v-model="newTask.title" id="title" required />
      </div>
      <div>
        <label for="status">Status:</label>
        <select v-model="newTask.status" id="status" required>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <button type="submit">Add Task</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'TaskForm',
  data() {
    return {
      newTask: {
        title: '',
        status: 'pending'
      }
    }
  },
  methods: {
    addTask() {
      this.$emit('add-task', this.newTask)
      this.newTask = { title: '', status: 'pending' }
    }
  }
}
</script>

<style scoped>
.task-form {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}

form div {
  margin-bottom: 10px;
}

button {
  padding: 5px 10px;
  border: none;
  background-color: #42b983;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #369b6f;
}
</style>
