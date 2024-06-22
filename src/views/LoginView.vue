<script setup>
import { useUserStore } from "../stores/user";
import AddTask from "@/components/AddTask.vue";
import { useTaskStore} from "../stores/task"
import { ref } from "vue";

const userStore = useUserStore();
const taskStore = useTaskStore();
const email = ref("");
const password = ref("");
const login = ref("");
const logout = ref("")

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
		  <button @click="userStore.login"> Login </button>
		  <button @click="userStore.logout"> Logout </button> 
    </div>
    </div>
        
    

    <div class="buttonstasks">
        <button @click="taskStore.fetchTasks()">Fetch tasks</button>
      
    </div>
    <ul class="tasks">
     <li v-for="task in taskStore.tasks">
       {{ task.title }}
       <button @click="taskStore.doneTask">Completada</button>
     </li>
    </ul>
    <AddTask></AddTask>
  </template>
  
  <style>
.loginmenu {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: pink;
}

.loginbuttons {
	display: flex;
	flex-direction: wrap;
    align-items: center;
    width: 400px;
    gap:30px;

}
.buttonstasks{
    display: flex;
	flex-direction: wrap;
    align-items: center;
    width: 400px;
    gap:30px;
    background-color: aquamarine;
}
.tasks{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:rgb(202, 161, 240);

}
</style>