<template>
 <!-- <v-parallax
 class="h-72 "
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  > -->
<div class="bg">
      <Header/>
    
      <!-- Menu -->
      <Me/>
</div>


 
    <!-- from-pink-500 to-violet-500 -->
<!--  -->
  

    <!-- <div 
    class="bg text-center text-3xl my-10">  
      <span class=" text-justify bg-clip-text text-transparent bg-gradient-to-r bg-blue h-auto ">
      AI  TOOLS 
      </span>
    </div>   -->
  <!-- </v-parallax> -->

<!--  -->

   <!--//////// -->




    <v-card class="bg" >
      <div class="txet  text-3xl text-center p-10 bg-clip-text text-transparent bg-gradient-to-r from-cyan-800 to-cyan-300">AI TOOLS..</div>
      <v-tabs
        v-model="tab"
        bg-color="# 170654"
        align-tabs="center"
        class="cl text-lg backdrop-blur-md"
      >
    
      <div class="text-white ">
        <v-tab value="all">All</v-tab>
        <v-tab value="one">Chat</v-tab>
        <v-tab value="two">Image</v-tab>
        <v-tab value="three">Code</v-tab>
      </div>
        
      </v-tabs>
  <!-- 11111111111111111111111111111111111111111111111111111111111111111111111111111111111 -->
  <!-- <v-parallax
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  > -->

      <v-card-text class="cl">
        <v-window v-model="tab">
          <v-window-item value="all">
           <!-- ALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL -->

<Chat/>

          </v-window-item>

          <!-- ========================================================== -->
          <v-window-item value="one">
           <!-- 1 -->

<Chat/>

          </v-window-item>
   
  
  <!-- 222222222222222222222222222222222222222222222222222222222222222222222 -->
          <v-window-item value="two">
         <Imageai/>
          </v-window-item>
  <!-- 3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 -->
          <v-window-item value="three">
<H1>Welcome</H1>

          </v-window-item>
        </v-window>
      </v-card-text>
      
  
<!-- </v-parallax> -->
</v-card>

<Footer/>

  </template>
  <script>
  import Header from '../views/layouts/Header.vue'
import Teamm from '../components/Team.vue'
import Chat from '../components/Aii/Chat.vue'
import Imageai from '../components/Aii/Imageai.vue'
import Me from '../components/Aii/Me.vue'
import Footer from '../views/layouts/Footer.vue'
    export default {
      data: () => ({
        tab: null,
         dialog: false,
        dialog2: false,
      }),
      components: { Teamm, Chat, Imageai, Me, Header , Footer}
    }
  </script>

  <style scoped>
.bg{
  /* background: linear-gradient(to right, #170654, #01FDFE); */
  background: #171719;
}
.cl{
  /* background: #170654; */
  background: #0C0C0D;
}
</style>