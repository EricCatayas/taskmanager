

export class TaskService {
  async GetTasks() {
    var tasks = [
      { id: 1, title: "Task 1", status: "completed" },
      { id: 2, title: "Task 2", status: "pending" },
      { id: 3, title: "Task 3", status: "in-progress" },
    ];
    //fetch request

    return tasks;
  }

  async CreateTask(task){
    //fetch request

    return;
  }
  
  async DeleteTask(taskId){
    //fetch request

    return;
  }
}

