<template>

  <!-- bg-gradient-to-r ຂອບຈຳ -->
  <!-- rounded-3xl ຂອບກົມ -->
  <!-- backdrop-blur-3xl bg-white/30 ເບີ -->
  <!-- bg-gradient-to-r backdrop-blur-3xl bg-white/40 -->
  <div class=" h-auto  mx-15 rounded-3xl ">
    <!-- from-purple-300 to-sky-300 -->
   
    <!-- -+_+_+_+__++____________________________________________________ -->
    
    <!-- ຂໍ້ຄວາມ -->
    <div class=" txet    text-center text-4xl  text-[#01FDFE] pb-10 ">
      It’s a website that collects <br />
      AI tools <br><span  class="txet  text-2xl text-center text-white">   Which will allow you to perform everyday <br />tasks with ease  </span>
    </div>
    <br />
    <!-- <div class="txet  text-2xl text-center text-white mb-15">
      Which will allow you to perform everyday <br />tasks with ease
    </div> -->


    <!-- ຄົ້ນຫາ -->
<!-- Icon==> d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" -->
    
    <div class="relative pb-10 m-5 ml-4 mt-4 text-center">
      <!-- <input
     
        type="text"
        placeholder="Search"
        icon="my-component"
        class="py-2 pl-8 pr-12 rounded-full bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      /> -->

      <!-- <input type="text" v-model="input" placeholder="Search fruits..." /> -->
      <div class="relative">
        <div class=" absolute inset-y-1 mx-56   left-24 pl-0 flex items-center  pointer-events-none">
            <svg class=" w-20 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input class="border-2 w-96 p-3 m-auto pl-10 text-5 text-slate-500 rounded-2xl // hover:shadow-md hover:shadow-[#0c66ee]/70 transition // bg-gray-50" placeholder="Search..." >
        <!-- <button type="submit" class="text-white absolute right-60 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> -->
    </div>
    <br>
    <br>
    <br>
    <!-- <div>
      <input class="text-white" style="border: 1px solid rgb(255, 255, 255);" @change="searchMethod">
    </div> -->

<!--   
    <v-icon>
      <svg-icon type="mdi" :path="path"></svg-icon>
    </v-icon> -->
      
<!-- <img src="../" alt=""> -->
  
      
  
          <!-- <v-icon icon="mdi-home" /> -->


    </div>
  </div>
  <!-- <textarea class="text-white resize-none rounded-md"></textarea> -->
</template>

<script>


onMounted(()=>{
  searchMethod()
 }),

 function searchMethod(val){
console.log(val.target.value);
}

// Font
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMagnify } from '@mdi/js';
import { ref } from "vue";


// API
import api from '../../usecase/api.js'
import { onMounted } from 'vue';
 const{category_name,fechgetegory,isloading, categories, search} = api;


 
let input = ref("");
const fruits = ["apple", "banana", "orange"];




export default {
  name: "my-component",
  components: {
    SvgIcon
  },
  data() {
    return {
       path: mdiMagnify,
    }
    
  },
  
}

</script>

<style>

/* .div{
  font-family: 'Archivo Narrow';
  text-transform: uppercase
} */
</style>
