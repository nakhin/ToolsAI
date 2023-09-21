<script setup>
// Components
import Header from '../../views/layouts/Header.vue';
import Me from './Me.vue';
import Footer from '../../views/layouts/Footer.vue';

// API
import api from '../../usecase/api.js'
import { onMounted } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()
 const{ categories, Course_name,fechgetegory, } = api;


 onMounted(()=>{
  Course()
 })

 function onDetail(id){
  console.log(id);
  router.push({name:"Details", params:{post_id:id}})
 }


</script>


<template >
    <div class="bg">
<Header/>
<Me/>  
</div>
<!--  -->
<div class="cl p-1">


<div class="grid lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-1 grid-cols-3 gap-7 gap-y-16 m-8 py-8 ">
    <v-card max-width="544"  v-for="(item,index) in Course_name" :key="index" >
      <v-img
        :src="`http://192.168.1.34:1337${item.image.url}`"
        height="200px"
        cover
      ></v-img>
      <hr />
      <v-card-title class="text-center">{{item.title }}</v-card-title>
      <v-card-subtitle>{{item.body }}</v-card-subtitle>
      <v-card-actions>
        <!-- <v-btn color="orange-lighten-2" variant="text" :href="item.url" target="_blank">
          View More
        </v-btn> -->
        <v-btn color="orange-lighten-2" variant="text" @click="onDetail(item.id)">
          View More
        </v-btn>
        <!-- Text -->
      </v-card-actions>
    </v-card>
    </div>

  </div>


<!--  -->

<Footer/>
</template>



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