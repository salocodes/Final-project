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
  display: flex;
  align-items: center;
  background-color: rgb(145, 241, 10);
  flex-direction: wrap;
  padding-left: 60px;
  width: 400px;
  gap:30px;
}
.homemenu {
  display: flex;
  align-items: center;
  background-color: pink;
  flex-direction: wrap;
  padding-left: 60px;
  width: 400px;
  gap:30px;
}
</style>
