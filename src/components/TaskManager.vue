<template>
  <div class="task-manager">
    <h2>Task Manager</h2>
    <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
      <div v-for="task in tasks" :key="task.id" class="col content-card">
        <div class="card card-just-text" data-background="color" :data-color="task.color" data-radius="none">
            <div class="row justify-content-between">
                <div class="col-auto hover-disappear">
                    <h6 class="category">{{ task.status }}</h6>                                
                </div>
            </div>
            <div class="content">
                <div class="hover-disappear">
                    <h6 class="category">{{ task.status }}</h6>
                    <h5 class="title">{{ task.title }}</h5>
                    <p>
                        <small class="category">--/--/--</small>
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'TaskManager',
        props: {
            tasks: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>
@import '../styles/card-list.css';

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
