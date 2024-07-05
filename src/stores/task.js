import { defineStore } from "pinia";
import supabase from "@/lib/supabase";
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
  const addTask = async (userID,titleTask) => {
    console.log(titleTask);
    const isDone2=false;
    const fecha = new Date();
    const { data, error } = await supabase
      .from('tasks')
      .insert([
        {user_id: userID,title: titleTask,is_complete:isDone2,inserted_at:fecha},
      ])

    if (error) console.log("Error: ", error);    
    else tasks.value = data;
    console.log("tasks: ", tasks.value);

    fetchTasks();
  }
  const updateTask = async (id, newTitle) => {
    const { error } = await supabase
      .from("tasks")
      .update({title:newTitle})
      .eq('id',id );
      id="";
      newTitle="";
    if (error) console.error("Error updating task:", error);
    else await fetchTasks();
  };
  const deleteTask = async (id) => {
    const response = await supabase
    .from('tasks')
    .delete()
    .eq('id', id)

    fetchTasks()
  };

  const doneTask = async (id) => {
    const doneIt=true;
  const { error } = await supabase

    .from('tasks')
    .update({ is_complete:doneIt }) 
    .eq('id', id);
    
  
  if (error) {
    console.error('Error al actualizar:', error.message);
    
  } else {
    console.log('Tarea actualizada');
  }
};

const showEdit= async (showMe) => {
  var show=document.getElementById("showSave");
  var ID= document.getElementById(tasks.task.id);
  if (ID)

  show.style.display=showMe;
};

const editRow= async(index) => {
  
  this.targetRow = index; // Establecer la fila que se debe editar
};


  return { tasks, fetchTasks,addTask,deleteTask,updateTask,doneTask,showEdit}
})