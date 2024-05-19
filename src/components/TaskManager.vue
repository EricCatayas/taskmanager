<template>
  <div class="task-manager">
    <h2>Task Manager</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id" :class="{ completed: task.status === 'completed' }">
        <h3>{{ task.title }}</h3>
        <p>Status: {{ task.status }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  data() {
    return {
      tasks: [
        { id: 1, title: 'Task 1', status: 'completed' },
        { id: 2, title: 'Task 2', status: 'pending' },
        { id: 3, title: 'Task 3', status: 'in-progress' }
      ]
    }
  }
}
</script>

<style scoped>
.task-manager {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

li.completed {
  background-color: #e0ffe0;
}
</style>
