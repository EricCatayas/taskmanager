

export class TaskService {
  constructor(){
    this.tasks = [
      { id: 1, title: "Task 1", status: "completed", color: "blue"},
      { id: 2, title: "Task 2", status: "pending", color: "green"},
      { id: 3, title: "Task 3", status: "in-progress", color: "yellow"},
      { id: 4, title: "Task 3", status: "in-progress", color: "purple"},
    ];
  }

  async GetAllAsync() {    
    //fetch request

    return this.tasks;
  }

  async CreateAsync(task){
    //fetch request

    this.tasks.push(task);    

    return;
  }
  
  async DeleteAsync(taskId){
    //fetch request

    return;
  }
}

