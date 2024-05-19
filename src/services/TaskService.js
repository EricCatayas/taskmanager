
  export async function getAllAsync() {    

    const url = `${process.env.VUE_APP_API_URL}/api/tasks`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log("Response:", data);
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle the error or rethrow it if you want to handle it elsewhere
      throw error;
    }
  }
  

  export async function createAsync(task){
    
    fetch(`${process.env.VUE_APP_API_URL}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(task),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Created new task:", data);
        return data;
      })
      .catch((error) => {
        console.error("Error creating task:", error);
      });

    return;
  }
  
  export async function updateAsync(task){
    
    fetch(`${process.env.VUE_APP_API_URL}/api/tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers as needed
      },
      body: JSON.stringify(task),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Updated task:", data);
        return data;
      })
      .catch((error) => {
        console.error("Error creating task:", error);
      });

    return;
  }
  
  export async function deleteAsync(taskId){
    
    fetch(`${process.env.VUE_APP_API_URL}/api/tasks/${taskId}`, {
      method: "DELETE"
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Deleted task:");
        return data;
      })
      .catch((error) => {
        console.error("Error creating task:", error);
      });

    return;
  }


