<template>

    <!-- <a href="#" class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Finding customers for your new business</a>
    <p class="mt-2 text-gray-600">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p> -->


<!-- <Showdetail/> -->
<!--     src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg" -->
<v-parallax class="bg h-auto">
    <!-- <div class="text from-[#7e7e7e] to-[#afafaf] "> -->
    <Header/>    
    <Me/>
<Menu/>  
    <!-- </div> -->


</v-parallax>   

<!-- test -->
<!-- <test/> -->
<div class="cl h-auto">  
 



  <!-- <input type="file" class="file-input file-input-bordered file-input-info w-full max-w-xs" /> -->
<!-- <Coo/> -->
<!-- 
<div class="text-sm font-extrabold ... px-5 p-8">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500">
    Recommend..
  </span>
</div>
    
  
  <image-button/> -->


  <div class="text-sm font-extrabold ... px-5 p-1">
  <span class="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-green-500">
    All..
  </span>
  <layout/>
</div>

<!-- <image-button/> -->

  <!-- <Linkai/> -->
</div>
      <!-- <router-view/> -->
<!-- <Tools/> -->

<!-- Footer -->
<Footer/>
</template>

<script setup>
import layout from '../../components/layout.vue'
import Me from '../../components/Aii/Me.vue';
import Coo from '../../components/Coo.vue';
import Menu from './Menu.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import ImageButton from '../../components/ImageButton.vue';
import Linkai from '../../components/Linkai.vue';

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