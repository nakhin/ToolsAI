<template>

      <hr>
      <hr>

  <div class="grid grid-cols-3 gap-5 gap-y-16 m-10">
    <button  v-for="button in buttons" :key="button.id" class="relative">

      <!-- class="absolute ປັບຂະໜາດຮູບໃຫ້ງາມ ແລະ ພໍດີ -->


     
      <img :src="button.image"  alt="button image" class="w-full h-full  object-cover rounded-md">
      <div class="absolute text-center items-center justify-center rounded-md text-2xl ">
      
        {{ button.label }}
      </div>
      <div class="absolute inset-0 bg-gray-800 opacity-0 hover:opacity-75 duration-300 flex items-center justify-center rounded-md">
        <!-- <span class="text-white text-lg">{{ button.label }}</span> -->
        <!-- <span>{{ button.label }}</span> -->
      </div> 
    </button>

  </div>
</template>

<script>
import { Button } from 'bootstrap';

export default {
  data() {
    return {
      
      buttons: [
        {
          id: 1,
          name:'Button',
          label: 'AI 1',
          social:"https://www.facebook.com/theboy.khamlar.39?mibextid=LQQJ4d",
          image: 'https://imageio.forbes.com/specials-images/imageserve/648aaa9fac6d92c810b12f50/Why-Companies-Are-Vastly-Underprepared-For-The-Risks-Posed-By-AI/960x0.jpg?height=406&width=711&fit=bounds',
        },
        {
          
          id: 2,
          
          href: "/Button",
          label: 'Button 2',
          image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg',
        },
        {
          id: 3,
          label: 'Button 3',
          image: 'https://aigencorp.com/wp-content/uploads/2022/03/1-1024x683.jpg',
        },
        {
          id: 4,
          label: 'Button 4',
          image: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=',
        },
        {
          id: 5,
          label: 'Button 5',
          image: 'https://bgr.com/wp-content/uploads/2023/05/BlueWillow.jpg?quality=82&strip=all&w=1020&h=574&crop=1',
        },
        {
          id: 5,
          label: 'Button 6',
          image: 'https://erp.today/wp-content/uploads/2022/12/Artificial_Intelligence.jpg',
        },
        {
          id: 5,
          label: 'Button 7',
          image: '../../src/assets/ms.png',
        },
        {
          id: 5,
          label: 'Button 8',
          image: 'https://aigencorp.com/wp-content/uploads/2022/03/1-1024x683.jpg',
        },
        {
          id: 1,
          label: 'Button 9',
          image: '../../src/assets/ms.png',
        },
        {
          id: 2,
          label: 'Button 10',
          image: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=',
        },
        {
          id: 3,
          label: 'Button 11',
          image: 'https://imageio.forbes.com/specials-images/imageserve/648aaa9fac6d92c810b12f50/Why-Companies-Are-Vastly-Underprepared-For-The-Risks-Posed-By-AI/960x0.jpg?height=406&width=711&fit=bounds',
        },
        {
          id: 4,
          label: 'Button 12',
          image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg',
        },
        {
          id: 1,
          label: 'Button 9',
          image: 'https://aigencorp.com/wp-content/uploads/2022/03/1-1024x683.jpg',
        },
        {
          id: 2,
          label: 'Button 10',
          image: 'https://media.istockphoto.com/id/1452604857/photo/businessman-touching-the-brain-working-of-artificial-intelligence-automation-predictive.jpg?s=612x612&w=0&k=20&c=GkAOxzduJbUKpS2-LX_l6jSKtyhdKlnPMo2ito4xpR4=',
        },
        {
          id: 3,
          label: 'Button 11',
          image: 'https://imageio.forbes.com/specials-images/imageserve/648aaa9fac6d92c810b12f50/Why-Companies-Are-Vastly-Underprepared-For-The-Risks-Posed-By-AI/960x0.jpg?height=406&width=711&fit=bounds',
        },
        {
          id: 4,
          label: 'Button 12',
          image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg',
        },
      ],
      methods:{
    onGotoLoginpage(){
      let name = "bobie";
      this.$router.push("/Login",name);
      window.href("/Login")
    }
  }
    }
  },
}
</script>

<style>

button {
  border: none;
  padding: 0;
}
</style>