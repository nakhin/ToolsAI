<script setup>
import api from "../usecase/api.js"
const {registerUser,email,username,password} = api;

  function routerlogin() {
  router.push({name: '/Login' })
}



</script>
    
    
<template  >
  
  <div>
    <div class="w-screen h-screen bg-screen flex justify-center items-center backgroud ">
      <div class="h-99 w-50 backdrop-sepia-0 bg-white p-3 rounded-lg shadow-2xl shadow-black">
           <div class="grid justify-items-center p-5">
             <div class="grid grid-cols-2  gap-16  ">
              <div class="flex items-center">
                 <img 
                 class=" h-12 large-image  flex items-center"
                 src="../assets/22.png" alt="">
                </div>
                <div class="">
                    <h1
                     class="txet flex justify-center items-center text-black lg:text-4xl md:text-lg sm:texr-sm ">SIGN UP</h1>
                     <br>
                     <!-- Username -->
                     <v-text-field
                       variant="underlined"
                       label="Username"
                       type="text" 
                        v-model="username"
                      
                       >
                       <template #prepend-inner>
                       <div style="width:30px">
                        <v-img style="margin: auto 0" max-height="25" max-width="30" src="src\assets\user (1).png"/>
                       </div>
                       </template>
                     </v-text-field>
                      <!-- Email -->
                     <v-text-field
                       variant="underlined"
                       label="Email"
                       type="email" 
                        v-model="email"
                       
                      
                       >
                       <template #prepend-inner>
                       <div style="width:30px">
                        <v-img 
                        style="margin: auto 0" max-height="25" max-width="30" 
                        
                        src="src\assets\mail.png"/>
                       </div>
                       </template>
                     </v-text-field>
                     <!-- password -->
                     <v-text-field
                       variant="underlined"
                       label="Password"
                       type="password" 
                        v-model="password"
                      
                       >
                       <template #prepend-inner>
                       <div style="width:30px"  >
                        <v-img style="margin: auto 0" max-height="25" max-width="30" src="src\assets\padlock.png"/>
                       </div>
                       </template>
                     </v-text-field>
                     <!-- button sign up -->
                       <button
                         class="flex justify-center items-center lg:w-24 h-10 md:w-32 sm:w-15  bg1 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition duration-300 ease-in-out font lg:text-lg md:text-sm sm:text-xs  "
                         @click="registerUser">SIGN UP</button>
                         <h1 class="txet py-5 lg:text-lg md:text-sm sm:text-xs   md:pr-1 text-center ">Or sign up with other account
                    </h1>
                    <!-- <div class="grid grid-cols-3 md:pl-11 text-center  ">
                      <div>
                        <v-btn icon class="w-5 h-5   hover:bg-blue-600">
                          <img src="../assets/GOOG-0ed88f7c.png" class="w- h-5" alt="">
                        </v-btn>
                    </div>
                      <div> 
                        <v-btn icon class="w-5 h-5   hover:bg-blue-600">
                           <img src="../assets/facebook.png" class="w- h-5" alt="">
                       </v-btn>
                      </div>
                    </div>  -->
                    <h1 class="txet py-5 lg:text-lg md:text-sm sm:text-xs   md:pr-1 text-center ">Alresady have an account?
                         <a
                         class="font py-5 text-blue-700"
                         href="/Login">
                          log in
                         </a>
                         </h1>
                       </div>
                        
                      </div>
                                       
        </div>
      </div>
    
    </div>
    
  </div>

</template>
     
    
    
    
    
<style scope>

.bg1{
  background: linear-gradient(to right, #170654, #01FDFE); 
}
.backgroud{
  background-image: url('../assets/bg-1.png');
}
.large-image {
  /* ปรับขนาดรูปภาพให้ใหญ่ขึ้น */
  width: 700px; /* ปรับตามความต้องการ */
  height: auto; /* คงความสัดส่วนของรูปภาพ */
}

</style>