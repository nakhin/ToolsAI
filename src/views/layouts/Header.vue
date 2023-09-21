<template>

<!-- <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-600 "></span> -->

    <div
      class="flex flex-col max-w-screen-xl px-5 mx-auto lg:items-center lg:justify-between lg:flex-row "
     
    >
   
      <div class="flex flex-col lg:flex-row items-center space-x-4 xl:space-x-8 ">
        <div >
          <div>
            <!-- <img 
         
              src="../../assets/AI.png"
              alt="Nefa Logo"
              class="w-44 xl:w-28"
           
      
            /> -->
            <routerLink to="/"  aria-current="page"
           
          ><img  src="../../assets/imgai/22.png"
              alt="Nefa Logo"
              class="h-32"
           >
          <!-- from-[#7e7e7e] to-[#afafaf] ໄລ່ສີ -->
        
          </routerLink>
          </div>
         
        </div>
      </div>
      <div class="space-x-5 hidden lg:flex pb-1 ">

<v-icon class="mt-5">
  <img src="../../assets/imgai/En.png"    alt="icon">
</v-icon>
     
        <routerLink to="/Login"
          class=" hover:bg-blue-300 text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-10 py-3 mt-2 bg-inherit text-gradient border border-[#0c66ee] text-white "
        >
          Login
        </routerLink>
        <routerLink to="/Signup"
          class="bg-[#01FDFE] hover:bg-blue-300 text-sm text-center rounded-full hover:shadow-md hover:shadow-[#0c66ee]/50 transition duration-300 px-8 xl:px-10 py-3 mt-2  text-gradient border border-[#0c66ee] text-slate-600 "
        >
          Sign up
        </routerLink>
      </div>
    </div>

</template>

<script>
export default {

function:{
  href(){
    console.log('AAAIIII');
  }
}

};

</script>

<style></style>
