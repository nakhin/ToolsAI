<template>
  <div class="bg">
<Header/>
<Me/>
</div>


  


   

 <div class="cl  grid grid-gap-2">
    <div class="grid grid-gap-5 justify-items-center">
        <!-- 01 -->

    <!-- 02 -->
    <div class="txet p-10 lg:text-6xl md:text-4xl sm:text-2xl text-[#01FDFE]">
      <h1>
      {{detail_post.title}}
      </h1>
    </div>


    <div class="grid grid-cols-1 ">
    <v-card max-width="844"  >
      <v-img
      v-if="detail_post.image"
        :src="`http://192.168.1.34:1337${detail_post.image.url}`" 
        height="auto"
        width="650px"
        cover
      ></v-img>
      </v-card>
      </div>
  
    <!-- 05 -->
    <div class="">
      <div class="txet text-2xl  md:text-xl sm:text-xs text-[#01FDFE] lg:m-15 md:m-10 sm:m-5 ">
       {{ detail_post.body }}
      </div >
    </div>
    <!-- 06 -->
    <!-- LINKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK -->
    <!-- :href="detail_post.url" target="_blank" -->
    <!-- <div class="pt-10 "> -->
    <!-- :href="detail_post.url" target="_blank" -->


 <!-- <button color="orange-lighten-2" variant="text" :href="item.url" target="_blank" >
          {{detail_post.title}}
        </button> -->

<!--  -->
      <v-btn 
    
        :href="detail_post.url"
      target="_blank"  
      class="backdrop:blur-3xl  lg:w-32 md:w-20 sm:w-12 lg:h-9 md:h-7 sm:h-9  ring-2 //transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-cyan-300"
      cover
      >
      <div class="text-[#000000]" >
      
           {{detail_post.title}}
        </div>
      </v-btn>
  
    <!-- </div> -->
    </div>
<br>  

    <div   class="bg grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center">
       <!-- 07 -->
    <div>
      <h1 class="pt-20 pt-15 lg:text-3xl md:text-1xl sm:text-xl text-white">
        Tools similar to....
      </h1>
      <v-card max-width="544"  v-for="(item,index) in cat_name_list" :key="index" >
      <v-img
        :src="`http://192.168.1.34:1337${item.image.url}`"
        height="200px"
        cover
      ></v-img>
      <hr />
      <v-card-title class="text-center">{{item.title }}</v-card-title>
      <v-card-subtitle>{{item.body }}</v-card-subtitle>
      </v-card>
    </div>
    <!-- asdkpfjsgiodfhguidhfijosapssosfhdsakosdfsodgiddskakdfhigfjakopadshifdsasdshfidsdogfdsaojidsfuifsaojdhua -->
    <!-- 08 -->

    
  </div>
   
  </div>

</template>

<script setup >
import Header from '../../views/layouts/Header.vue';
import Me from './Me.vue';


// API
import api from '../../usecase/api'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';




const route = useRoute()
 const{category_name,fechgetegory,isloading,categories,creaecategory,detail_post,fetchingById , cat_name_list} = api;

 onMounted(()=>{
  fetchingById(route.params.post_id)
 })

</script>

<style scoped>
.bg{
  /*   background: linear-gradient(to right, black, gray); */
  /* background: linear-gradient(to right, #170654, #01FDFE); */
  background: #212121;
}
.cl{
  /* background: #170654; */
  background: #0C0C0D;
}
</style>