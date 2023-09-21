<template>
    <!-- <v-parallax
  src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
> -->
<div class="bg">


<Header/>
<!-- <Menu/> -->

<Me/>


</div>
<!-- <v-parallax
class="h-36 w-full"
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
  <div class="flex justify-center ">Hello!</div>
</v-parallax> -->
<!-- TTTTTTTEEEEEEEAAAAAAAAAMMMMMMMMMMMMM -->
<div class="ci grid  lg:grid-cols-4 md:grid-cols-2  sm:grid-cols-1 gap-7 gap-y-16 p-10 w-full">
    <v-card max-width="544">
    <v-img src="https://scontent.fvte3-1.fna.fbcdn.net/v/t39.30808-6/375727523_294267823344108_2054926626361746240_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFnN-D6feRKaJxCgFrxW0_1q3Ukmt324ymrdSSa3fbjKQE7rMwEmfpAlcjz13FVark4gVlPl7xkOhPS9kTq9onY&_nc_ohc=y5xsNVO9TcEAX9gOsSw&_nc_ht=scontent.fvte3-1.fna&oh=00_AfAvFyVvkvf8JL6EC1bw1zWqncPMXmVBWpBxs5dj_8_9zw&oe=64FEFC2A" height="200px" cover></v-img>
    <hr />
    <v-card-title class="text-center ">Nakhin chanthaphavong</v-card-title>
    <v-card-subtitle>DEV...</v-card-subtitle>
    <v-card-actions>
      <v-btn color="blue" variant="text" @click="dialog3 = true">
        View facebook
      </v-btn>
      <v-dialog v-model="dialog3" max-width="600">
        <v-card>
          <v-card-title>AK</v-card-title>
          <v-card-text>
            <p class="phet">
          NAKHIN
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="orange-lighten-2" text @click="dialog3 = false">
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
<!-- 2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222 -->
  <v-card max-width="544">
    <v-img src="#" height="200px" cover></v-img>
    <hr />
    <v-card-title class="text-center">A</v-card-title>
    <v-card-subtitle>You can use this website for free.</v-card-subtitle>
    <v-card-actions>
      <v-btn color="blue" variant="text" @click="dialog2 = true">
        View facebook
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
      src=" #"
      height="200px"
      cover
    ></v-img>
    <hr />
    <v-card-title class="text-center">B</v-card-title>
    <v-card-subtitle>You can use this website for free.</v-card-subtitle>
    <v-card-actions>
      <v-btn color="blue" variant="text" @click="dialog = true">
        View facebook
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
      src="#"
      height="200px"
      cover
    ></v-img>
    <v-card-title class="text-center">C</v-card-title>
    <v-card-subtitle>
      Understanding AI and its impact on business and society
    </v-card-subtitle>
    <v-card-actions>
      <v-btn color="blue" variant="text">
        View facebook
      </v-btn>
    </v-card-actions>
  </v-card>
</div> 
   <Footer/>
    <!-- </v-parallax> -->

</template>

<style scoped>
.bg{
  /* background: linear-gradient(to right, #170654, #01FDFE); */
  background:  #171719;
}
.ci{
  /* background: #170654; */
  background: #0C0C0D;
}
</style>


<script >
import Footer from '../views/layouts/Footer.vue'
import Header from '../views/layouts/Header.vue';
import Menu from '../views/layouts/Menu.vue';
import Me from '../components/Aii/Me.vue';


export default {
  data: () => ({
      dialog: false,
      dialog2: false,
      dialog3: false,
  }),
  components: { Header, Menu , Footer, Me}
};
</script>