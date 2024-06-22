import { defineStore } from "pinia";
import supabase from "@/lib/supabase"
import { ref } from "vue";

export const useUserStore = defineStore("userStore", () => {
  const user = ref();

  const createNewUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
  
    if (error) console.log("error: ", error);
    else user.value = data;
    console.log("user :", user.value);
  };
  async function login() {
    console.log("run")
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error)
    {
      console.log(error);
    }
    else
    {
      console.log(data);
    }
  }
  async function logout() {
    const { error } = await supabase.auth.signOut();
  
    if (error) {
      console.log(error);
    }
    else {
      console.log("Sign out success")
    }
  }
  return { user, createNewUser,login,logout}
})