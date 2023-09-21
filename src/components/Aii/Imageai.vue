<template>
  <div class="cl w-full h-auto ">

 
     <div class="cl grid grid-cols-3 gap-7 gap-y-16">
<v-card max-width="544"  v-for="(item,index) in categories" :key="index" >
      <v-img
        :src="`API  ${item.image.url}`"
        height="200px"
        cover
      ></v-img>
      <hr />
      <v-card-title class="text-center">{{item.title }}</v-card-title>
      <v-card-subtitle>{{item.body }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" :href="item.url" target="_blank">
          View More
        </v-btn>
        <!-- Text -->
      </v-card-actions>
    </v-card>



                <!--  -->
                <v-card max-width="544">
      <v-img
        src="../src/assets/imgai/Bing.png"
        height="200px"
        cover
      ></v-img>
      <hr />
      <v-card-title class="text-center">AI BING</v-card-title>
      <v-card-subtitle>You can use this website for free.</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" @click="dialog = true">
          View More
        </v-btn>
        <!-- Text -->
 <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <v-card-title>AI BING</v-card-title>
            <v-card-text>
              <p>
                AI BING You can use this website for free
              </p>
            </v-card-text>
            <v-card-actions>
              <v-btn color="orange-lighten-2" text @click="dialog = false">
                Close
              </v-btn>
              <v-btn
                color="orange-lighten-2"
                text
                href="https://www.bing.com/images/create/"
                target="_blank"
                >Explore</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
    </v-card>
<!-- 2 -->
<v-card max-width="544">
      <v-img
        src="https://bgr.com/wp-content/uploads/2023/05/BlueWillow.jpg?quality=82&strip=all&w=1020&h=574&crop=1"
        height="200px"
        cover
      ></v-img>
      <hr />
      <v-card-title class="text-center">AI-1</v-card-title>
      <v-card-subtitle>You can use this website for free.</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" @click="dialog = true">
          View More
        </v-btn>
        <!-- Text -->
 <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <v-card-title>AI-1</v-card-title>
            <v-card-text>
              <p style="font-family: phetsarath ot;">
               ຂໍອະໄພ AI-1 ຢູ່ໃນຊ່ວງພັດທະນາ .
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
<!-- 3 -->
<v-card max-width="544">
      <v-img
        src="https://imageio.forbes.com/specials-images/imageserve/648aaa9fac6d92c810b12f50/Why-Companies-Are-Vastly-Underprepared-For-The-Risks-Posed-By-AI/960x0.jpg?height=406&width=711&fit=bounds"
        height="200px"
        cover
      ></v-img>
      <hr />
      <v-card-title class="text-center">AI-1</v-card-title>
      <v-card-subtitle>You can use this website for free.</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" variant="text" @click="dialog = true">
          View More
        </v-btn>
        <!-- Text -->
 <v-dialog v-model="dialog" max-width="600">
          <v-card>
            <v-card-title>AI-1</v-card-title>
            <v-card-text>
              <p style="font-family: phetsarath ot;">
               ຂໍອະໄພ AI-1 ຢູ່ໃນຊ່ວງພັດທະນາ .
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
    </div>
  </div>

</template>

<script setup>
// import Footer from '../../views/layouts/Footer.vue';
import api from '../../usecase/api.js'
import { onMounted } from 'vue';
 const{fechgetegory,isloading,categories,creaecategory} = api;

 onMounted(()=>{
  fechgetegory()
 })

API= "http://192.168.1.33:1337"

// export default {
//     data: () => ({
//         dialog: false,
//         dialog2: false,
//         dialog3: false,
//     }),
//   }
</script>

<style scoped>
.cl{
  background: #170654;
}
</style>