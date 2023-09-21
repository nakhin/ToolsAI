<template>
  <div class="pb-10 ">

  
  <div   class="text-lg text-center ">
    <div class="flex justify-center ">
      <div class="txet grid grid-cols-5 gap-5 text-xl-h6 m-3 ">
        <!-- <routerLink to="/Login"  aria-current="page">  ລີ້ງໜ້າ-->
        <!-- text-transform: uppercase ໜັງສືໂຕໃຫຍ່ -->
        <!--  bg-white/30 -->
        <!-- #0c66ee -->

        <!-- <button class="relative flex h-3 w-3"> -->
          <!-- ຮາຄິ -->
  <!-- <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 "></span> -->
  <!-- <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500 text-white ">NAKHIN</span>  -->
<!-- </button> -->


        <routerLink
          to="/"
          aria-current="page"
          class=" hover:-translate-y-1 hover:scale-110  text-1xl rounded-full hover:shadow-md hover:shadow-[#01FDFE]/50 duration-300 px-2 py-3 xl:mt-12 text-white // shadow-sm focus:outline-none focus:ring-2 focus:border-sky-400 focus:border-transparent "
        >
          <!-- from-[#7e7e7e] to-[#afafaf] ໄລ່ສີ -->
          Home
        </routerLink>
        <!--  -->
   <!-- from-[#7e7e7e] to-[#afafaf] ໄລ່ສີ -->
        <!-- <routerLink
          to="/Linkai"
          aria-current="page"
          class="hover:-translate-y-1 hover:scale-110 border-cyan-300 text-1xl rounded-full hover:shadow-md hover:shadow-[#01FDFE]/50 duration-300 px-2 py-3 xl:mt-12 text-white // shadow-sm focus:outline-none focus:ring-2 focus:border-b-cyan-300 focus:border-transparent"
        >
       
          AI Tools Categories
          
        </routerLink> -->
      <!-- =================================================== -->

        <div class="hover:-translate-y-1 hover:scale-110 border-cyan-300 text-1xl rounded-full hover:shadow-md hover:shadow-[#01FDFE]/50 duration-300 px-2 py-3 xl:mt-12 text-white // shadow-sm focus:outline-none focus:ring-2 focus:border-b-cyan-300 focus:border-transparent" >
    <v-menu
    
      open-on-hover
    >
      <template  v-slot:activator="{ props }"
      >


      
      <routerLink
      v-bind="props"
          to="#"
          aria-current="page"
          
        >
        AI Tools Categories
          
      </routerLink>



      </template>

      <v-list>
        <v-list-item
    
          v-for="(item, index) in items"
          :key="index"   @click="onRouteInit(item.href)">

          <v-list-item-title > 
{{ item.title }}

   </v-list-item-title>
        </v-list-item>
        <v-breadcrumbs
    
     
    ></v-breadcrumbs>
      </v-list>
    </v-menu>
  </div>


        <!-- <button
            class="hover:bg-blue-300  text-center rounded-full hover:shadow-md hover:shadow-[#01FDFE]/50 transition duration-300 px-8 xl:px-10 py-3 xl:mt-12  text-black // shadow-sm focus:outline-none focus:ring-2  focus:border-b-cyan-300 focus:border-transparent"
          >
       sadasdas
          </button> -->

        <routerLink
          to="#"
          aria-current="page"
          class="hover:-translate-y-1 hover:scale-110 border-cyan-300 text-1xl rounded-full hover:shadow-md hover:shadow-[#01FDFE]/50 duration-300 px-2 py-3 xl:mt-12 text-white // shadow-sm focus:outline-none focus:ring-2 focus:border-b-cyan-300  focus:border-transparent"
        >
        AI Courses
        </routerLink>
        <routerLink
          to="#"
          aria-current="page"
          class="hover:-translate-y-1 hover:scale-110 border-cyan-300 text-1xl rounded-full hover:shadow-md hover:shadow-[#01FDFE]/50 duration-300 px-2 py-3 xl:mt-12 text-white // shadow-sm focus:outline-none focus:ring-2 focus:border-b-cyan-300 focus:border-transparent"
        >
        AI Guides
        </routerLink>
        <routerLink
          to="/Team"
          aria-current="page"
          class="hover:-translate-y-1 hover:scale-110 border-cyan-300 text-1xl rounded-full hover:shadow-md hover:shadow-[#01FDFE]/50 duration-300 px-2 py-3 xl:mt-12 text-white // shadow-sm focus:outline-none focus:ring-2 focus:border-b-cyan-300 focus:border-transparent"
        >
         Team
        </routerLink>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    data: () => ({
      items: [
        {
          title: 'ALL',
          disabled: false,
          href: 'All',
        },
        {
          title: 'Tools 1',
          disabled: false,
          href: 'Tools',
        },
        {
          title: 'Link 2',
          disabled: true,
          href: '/Coo',
        },
      ],
    }),
  
      methods :{

        // 
        onRouteInit(val){
          this.$router.push({name:val}).catch((er)=>{})
        }
       
      }
    }
</script>

<style></style>
