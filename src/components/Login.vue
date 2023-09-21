<script setup>
import {useRouter} from 'vue-router'
const router = useRouter()
import api from '../usecase/api';
const {loginuser,email,password} = api;
    function login() {
     loginuser();
} 

function routersignup() {
  router.push({name: 'singup' })
}
</script>
    
    
<template  >
 
  
  <div>
   
    <div class=" w-screen h-screen  flex justify-center items-center backgroud">
      <div class="h-99 w-50 bg-white p-4  rounded-lg shadow-2xl shadow-black">

        <div class="grid grid-cols-2  ">
          <div><img src="../assets/logo.png" class="w-40" /></div>
            
          <div class="col-span-2">
            <h1
          class="flex justify-center items-center text-black lg:text-4xl md:text-lg sm:texr-sm font-bold font-bai jamjuree mt-1">LOG IN</h1>
            <div class="grid justify-items-center p-5 ">
            <!-- Email -->
            <v-text-field
                       variant="underlined"
                       label for="email"
                       id="email" 
                       v-model="email" 
                       class=" md:w-32 lg:w-80  px-3 py-2 rounded-md  focus:outline-none mb-4"
                       >
                       <template #prepend-inner>
                       <div style="width:30px">
                        <v-img style="margin: auto 0" max-height="25" max-width="30" src="src\assets\mail.png"/>
                       </div>
                       </template>
            </v-text-field>

             <!-- password -->
             <v-text-field
                variant="underlined"
                label for="password"
                type="password"
                id="password"
                v-model="password" 
                class="lg:w-80 md:w-32  sm:w-15 px-3 py-0 lg:text-lg md:text-sm sm:text-xsrounded-md  focus:outline-none mb-4">
                  <template #prepend-inner>
                    <div style="width:30px">
                      <v-img style="margin: auto 0" max-height="25" max-width="30" src="src\assets\padlock.png"/>
                    </div>
                  </template>
              </v-text-field>
               <!-- button log in -->
             <button @click="login"
            class="lg:w-24 h-10 md:w-32 sm:w-15  bg1 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300 ease-in-out font-bai jamjuree lg:text-lg md:text-sm sm:text-xs">Login</button>
            <br>
           
            <h1 class="font-bai jamjuree py-5 lg:text-lg md:text-sm sm:text-xs"> log in with other account Or
              <a
              class="font-bai jamjuree py-5 text-blue-700"
               href="/Signup">
              sing up
            </a>

            </h1>
            <!-- <div class="grid grid-cols-2 gap-5">
                      <div>
                        <v-btn icon class="w-5 h-5  hover:bg-blue-500">
                          <img src="../assets/GOOG-0ed88f7c.png" class="w- h-5" alt="">
                        </v-btn>
                    </div>
                      <div> 
                        <v-btn icon class="w-5 h-5 hover:bg-blue-500">
                           <img src="../assets/facebook.png" class="w- h-5" alt="">
                       </v-btn>
                      </div>
                    </div> -->
          
        </div>
          </div>
          </div>

        
         

      </div>
    </div>
  </div>

</template>
     
    
    
    
    
<style scope>

.backgroud{
  background-image: url('../assets/bg-1.png');
}
.bg1{
  background: linear-gradient(to right, #170654, #01FDFE); 
}
</style>