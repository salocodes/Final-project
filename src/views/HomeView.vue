<script setup>
import { useUserStore } from "../stores/user";
import { useTaskStore} from "../stores/task";
import { ref } from "vue";

</script>

<template>
  <h1 class="hometittle">To Do List Home Page</h1>
  <div class="homemenu">
   
    <router-link to="/login">LOGIN</router-link>
    <router-link to="/register">REGISTER</router-link>
  </div>
 
</template>

<style>
.hometittle {
  background-color: #ffb6c1; /* Un tono de rosa más oscuro */
  color: white;
  text-align: center;
  padding: 10px 0;
}
.homemenu {
  background-color: #e7556d; /* Rosa claro */
  font-family: Arial, sans-serif;
  margin: 50px;
  padding: 50px;
  display: flex;
  gap:200px;
  text-align: center;
}
</style>
