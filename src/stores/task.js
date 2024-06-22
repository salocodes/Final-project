import { defineStore } from "pinia";
import supabase from "@/lib/supabase"
import { ref } from "vue";

export const useTaskStore = defineStore("taskStore", () => {
  const tasks = ref([]);

  const fetchTasks = async () => {
    const { data, error } = await supabase
      .from('tasks')
      .select()

    if (error) console.log("Error: ", error);
    else tasks.value = data;
    console.log("tasks: ", tasks.value);
  }
  const addTask = async (taskDetails) => {
    const { error } = await supabase.from("tasks").insert([taskDetails]);
    if (error) {
      console.error("Failed to add task:", error.message);
      return;
    }
    await fetchTasks();
  }
  const modifyTask = async (id, updates) => {
    const { error } = await supabase
      .from("tasks")
      .update(updates)
      .match({ id });
    if (error) console.error("Error updating task:", error);
    else await fetchTasks();
  };
  const deleteTask = async (id) => {
    const { error } = await supabase.from("tasks").delete().match({ id });
    if (error) console.error("Error deleting task:", error);
    else await fetchTasks();
  };

  const insertTask = async () => {
    const { error } = await supabase
    .from('tasks')
    .insert('id')
  }
  const doneTask=async()=>{
    
  }

  return { tasks, fetchTasks,addTask,deleteTask,modifyTask,insertTask}
})