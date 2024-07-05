<script setup>
import { useUserStore } from "../stores/user";

import DeleteTask from "../components/DeleteTask.vue";
import { useTaskStore} from "../stores/task"
import { ref } from "vue";

const userStore = useUserStore();
const taskStore = useTaskStore();
const email = ref("");
const password = ref("");
const userID=ref("");
const titleTask=ref("");
const changeTask=ref("");
const isDivVisible= false;
const deletevarTask = (id) => {
  taskStore.deleteTask(id);
}

</script>
<template>
    <div class="loginmenu">   
        <h1>Login Page</h1>
	    <div>
		  <label for="email"> Email: </label>
		  <input type="email" id="email" v-model="email">
	    </div>

	    <div>
		  <label for="password"> Password: </label>
		  <input type="password" id="password" v-model="password">
    
      </div>
      <div class="loginbuttons">
        <div><button @click="userStore.login"> Login </button>
      
        </div>
		  <div><button @click="userStore.logout"> Logout </button> </div>
      
    </div>
    </div>
    <h2 class="getTasks"><button class="buttonstasks" @click="taskStore.fetchTasks()">Fetch tasks</button></h2>
   
    <div>
      <table class="table">
      <tr v-for="task in taskStore.tasks">
          <td>This are your Task</td>
          <td>
            <div>
              <input type="text" v-model="task.title">
            </div>
            <div>
              <h4 style="display: none;">{{ userID=task.user_id }}</h4>
            </div>
          </td>
          <td width="40%">
            <div class="taskComplete" v-if=task.is_complete>ESTATUS: Completed</div>
            <div class="taskPending" v-else=task.is_complete>ESTATUS: Pending<button @click="taskStore.doneTask(task.id)">Done it</button></div>
           
          </td>
          <td>
            <div class="editdelButton">
            <button @click="taskStore.updateTask(task.id,task.title)">Update</button>
            <button @click="deletevarTask(task.id)" >Delete</button>
          </div>
          </td>
      </tr>
    </table>
      <div v-show="userID!=''">
      <h2 class="taskAdd">Add a new Task</h2>
      <input class="taskInput" type="text" placeholder="Write Task" v-model="titleTask">
      <button class="addButton" @click="taskStore.addTask(userID,titleTask)">Insert new Task</button> 
    </div>
      
    
      
    </div>

  
  
  </template>
  
  <style>
  .table{

    border-style: double;
    border-color:darkblue;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;


  }
.loginmenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(25, 169, 226);
  gap:50px;
}
.getTasks {
  display: flex;
  flex-direction: column;
  color:whitesmoke;
  align-items: center;
  background-color: rgb(139, 12, 129);
  gap:50px;
}
.loginbuttons {
	display: flex;
	flex-direction: wrap;
    align-items: left;
    width: 400px;
    gap:30px;

}
.buttonstasks{
  align-items: center;
   
    font-size: medium;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    width: 400px;
    height: 50px;
    align-self: center;
    text-align: center;
    
    background-color: rgb(242, 215, 215);
    
  
    
}
.tasks{
  flex-direction: column;
  align-items: center;
  gap:500px;
  background-color:rgb(142, 133, 230);
  text-emphasis-style: bold;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: medium;
  font: bold;
  color: rgb(0, 0, 255);

}
.taskComplete{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:30px;
  background-color:rgb(25, 255, 52);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: medium;
  font: bold;
  color: rgb(0, 0, 0);
  

}
.taskPending{
  display: flex;
  align-items: center;
  gap:40px;
  background-color:rgb(255, 0, 0);
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: medium;
  font: bold;
  color: rgb(0, 0, 0);
}
.taskAdd{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:30px;
  background-color:rgb(214, 89, 218);
}
.taskAddButton{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:30px;
  
}
.addButton{
  margin-left: auto;
  margin-right: auto;
  width: 200px;
    height: 30px;
  gap:40px;
 color:rgb(8, 0, 240);
  
}
.taskInput{
  width: 500px;
    height: 25px;
}
.editdelButton{
  display: flex;
  align-items: center;
  gap:30px;
  align-content: center;
  
}
</style>
