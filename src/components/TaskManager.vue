<template>
  <section class="container p-5">
    <div class="task-manager">
      <h2>Task Manager</h2>
      <div class="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2">
        <div v-for="task in tasks" :key="task.id" class="col content-card">
          <div class="card card-just-text" data-background="color" :data-color="task.color" data-radius="none">
              <div class="row justify-content-between">
                  <div class="col-auto hover-disappear">
                      <h6 class="category">{{ task.status }}</h6>                                
                  </div>
                  <div class="col-auto">
                    <button v-if="task.status === 'completed'" class="delete-btn category btn btn-danger btn-sm text-white" type="button" @click="deleteTask(task.id)">Delete</button>
                    <button v-else-if="task.status === 'pending'" class="completed-btn category btn btn-success btn-sm text-white" type="button" @click="updateTask(task, 'in-progress')">In-Progress</button>                                            
                    <button v-else class="completed-btn category btn btn-success btn-sm text-white" type="button" @click="updateTask(task, 'completed')">Completed</button>                                            
                  </div>
              </div>
              <div class="content">
                  <div class="hover-disappear">
                      <h6 class="category">{{ task.status }}</h6>
                      <h5 class="title">{{ task.title }}</h5>
                      <!-- <p>
                          <small class="category"{task.date}</small>
                      </p> -->
                  </div>
              </div>
          </div>
        </div>
      </div>
    </div>  
    <TaskForm :addTask="createAsync"/>
  </section>
</template>

<script>
  
  import { getAllAsync, createAsync, updateAsync, deleteAsync } from '@/services/TaskService';
  import TaskForm from './TaskForm.vue';

  export default {
    name: 'TaskManager',
    components: {
      TaskForm
    },
    data() {
      return {
        tasks: []
      };
    },
    created() {
        this.loadTasks();
    },
    methods: {
      async loadTasks() {
        try {
          var result = await getAllAsync();
          this.tasks = result;

        } catch (error) {
          console.error('Error loading tasks:', error);
        }
      },
      async createAsync(task) {
        try{

          await createAsync(task);
          this.refreshPage();

        } catch (error) {
          console.alert('Error creating tasks', error);
        }
      },
      async updateTask(task, status) {
        try{

          task.status = status;
          var updated = await updateAsync(task);

          this.refreshPage();
        } catch (error) {
          console.alert('Error updating task', error);
        }
      },
      async deleteTask(taskId) {

        await deleteAsync(taskId);
        
        this.refreshPage()

      },
      refreshPage() {
        window.location.reload();
      },
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
