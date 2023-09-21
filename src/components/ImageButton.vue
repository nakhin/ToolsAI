<template>
      <!-- <v-parallax
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  > -->




  <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 m-8">
    <v-card max-width="544"  v-for="(item,index) in categories" :key="index" >
      <v-img
        :src="`http://192.168.1.34:1337${item.image.url}`"
        height="200px"
        cover
      ></v-img> 
      <hr />
      <!-- :href="item.url" target="_blank" -->
      <v-card-title class="text-center">{{item.title }}</v-card-title>
      <v-card-subtitle>{{item.body }}</v-card-subtitle>
      <v-card-actions @click="onDetail(item)">
        <v-btn color="orange-lighten-2" variant="text"   >
          View More one
        </v-btn>
        <!-- Text -->
        <v-dialog v-model="dialog3" max-width="600">
          <v-card>
            <v-card-title>AI-1</v-card-title>
            <v-card-text>
              <p>
              {{ item.body }}
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange-lighten-2" text @click="dialog3 = false">
                Close
              </v-btn>
              <v-btn
                color="orange-lighten-2"
                text
                href="https://www.bing.com/images/create"
                target="_blank"
                >Explore</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
     <!-- </div> -->




<!-- <Menu/> -->

<!-- <div class="backdrop-blur-md bg-white/30 p-8">
  <Tools/>
</div> -->

  <!-- <div class="grid grid-cols-3 gap-7 gap-y-16 m-12"> -->
    <v-card max-width="544">
      <v-img
        src="../src/assets/imgai/Bing.png"
        height="200px"
        cover
      ></v-img>
      <hr />
      <v-card-title class=" text-center">BING AI</v-card-title>
      <v-card-subtitle>You can use this website for free.</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" @click="dialog3 = true">
          View More
        </v-btn>
        <!-- Text -->
 <!-- <v-dialog v-model="dialog3" max-width="600">
          <v-card>
            <v-card-title>AI-1</v-card-title>
            <v-card-text>
              <p style="font-family: phetsarath ot;">
               ຂໍອະໄພ AI-1 ຢູ່ໃນຊ່ວງພັດທະນາ .
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange-lighten-2" text @click="dialog3 = false">
                Close
              </v-btn>
              <v-btn
                color="orange-lighten-2"
                text
                href="https://www.bing.com/images/create"
                target="_blank"
                >Explore</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog> -->
      </v-card-actions>
    </v-card>
<!-- 2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 -->
    <v-card max-width="544">
      <v-img src="../../src/assets/H.png" height="200px" cover></v-img>
      <hr />
      <v-card-title class="text-center">HALtechXChatGPT</v-card-title>
      <v-card-subtitle>You can use this website for free.</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" @click="dialog2 = true">
          View More
        </v-btn>
        <v-dialog v-model="dialog2" max-width="600">
          <v-card>
            <v-card-title>HALtechXChatGPT</v-card-title>
            <v-card-text>
              <p class="phet">
                HALtechXChatGPT is a website that uses AI to generate chatbot
                conversations. It's free to use and can be a great tool for
                businesses or individuals who want to improve their customer
                service or communication with clients.
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange-lighten-2" text @click="dialog2 = false">
                Close
              </v-btn>
              <v-btn
                color="orange-lighten-2"
                text
                href="https://chat.haltech.la"
                target="_blank"
                >Explore</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
    <!-- https://bgr.com/wp-content/uploads/2023/05/BlueWillow.jpg?quality=82&strip=all&w=1020&h=574&crop=1 -->
<!-- 3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333 -->
<v-card max-width="544">
      <v-img
        src=" https://bgr.com/wp-content/uploads/2023/05/BlueWillow.jpg?quality=82&strip=all&w=1020&h=574&crop=1"
        height="200px"
        cover
      ></v-img>
      <hr />
      <v-card-title class="text-center">AI-2</v-card-title>
      <v-card-subtitle>You can use this website for free.</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" @click="dialog = true">
          View More
        </v-btn>
        <!-- Text -->
 <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <v-card-title>AI-2</v-card-title>
            <v-card-text>
              <p style="font-family: phetsarath ot;">
               ຂໍອະໄພ AI-2 ຢູ່ໃນຊ່ວງພັດທະນາ .
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange-lighten-2" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn
                color="orange-lighten-2"
                text
                href="#"
                target="_blank"
                >Explore</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
<!-- 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444 -->
    <v-card max-width="544">
      <v-img
        src="https://erp.today/wp-content/uploads/2022/12/Artificial_Intelligence.jpg"
        height="200px"
        cover
      ></v-img>
      <v-card-title>Artificial Intelligence</v-card-title>
      <v-card-subtitle>
        Understanding AI and its impact on business and society
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text">
          View More
        </v-btn>
      </v-card-actions>
    </v-card>
<!-- 555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555 -->
    <v-card max-width="544">
      <v-img
        src="https://aigencorp.com/wp-content/uploads/2022/03/1-1024x683.jpg"
        height="200px"
        cover
      ></v-img>
      <v-card-title>AIgen Corp</v-card-title>
      <v-card-subtitle>
        We provide AI solutions for businesses and individuals
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text">
          View More
        </v-btn>
      </v-card-actions>
    </v-card>
<!-- 666666666666666666666666666666666666666666666666666666666666666666666666666666666666666 -->
    <v-card max-width="544">
        <v-img
        src="https://ichef.bbci.co.uk/news/1024/cpsprodpb/14202/production/_108243428_gettyimages-871148930.jpg"
        height="200px"
        cover ></v-img>
      <v-card-title>Climate Change</v-card-title>
      <v-card-subtitle>
        Understanding the science and impact of climate change
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text">
          View More
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
      <!-- </v-parallax> -->
</template>

<style>

</style>


<script >
import Header from '../views/layouts/Header.vue';
import Menu from '../views/layouts/Menu.vue';
import Tools from '../views/layouts/Tools.vue';

import api from '../usecase/api.js'
import { onMounted, reactive } from 'vue';
 const{category_name,fechgetegory,isloading, categories, creaecategory} = api;

 onMounted(()=>{
  fechgetegory()
 })


//  const data = reactive({

//         dialog: false,
//         dialog3: false,
//         dialog2: false,
//  })
export default {
    data: () => ({
        dialog: false,
        dialog3: false,
        dialog2: false,
    }),
    components: { Header, Menu, Tools },
    methods:{
      onDetail(id){
        console.log(id);
      }
    }
};
</script>