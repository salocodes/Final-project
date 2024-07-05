<script setup>
import { ref } from 'vue';
import { useTaskStore } from '../stores/task';
import { useUserStore } from '../stores/user'; 

const taskStore = useTaskStore();
const userStore = useUserStore(); 
const title = ref('');

</script>

<template>
  
</template>