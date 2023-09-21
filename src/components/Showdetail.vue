
<template>
    <div class="grid grid-cols-3 gap-7 gap-y-16 m-12">
      <v-card max-width="544">
        <v-img
          src="https://imageio.forbes.com/specials-images/imageserve/648aaa9fac6d92c810b12f50/Why-Companies-Are-Vastly-Underprepared-For-The-Risks-Posed-By-AI/960x0.jpg?height=406&width=711&fit=bounds"
          height="200px"
          cover
        ></v-img>
        <hr>
        <v-card-title class="text-center">
          HALtechXChatGPT
        </v-card-title>
        <v-card-subtitle>
          You can use this website for free.
        </v-card-subtitle>
        <v-card-actions>
          <v-btn color="orange-lighten-2" variant="text">
            <a href="#" target="_blank">Explore</a>
          </v-btn>
          <v-btn color="primary" small @click="show = !show">
            {{ show ? "Hide" : "Read More" }}
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              lobortis semper orci, sit amet consequat sapien condimentum a.
              Vivamus gravida tincidunt lorem, non hendrerit ipsum efficitur
              vel. Nam euismod ligula vel quam luctus, nec dictum tellus
              convallis. Suspendisse commodo, turpis vel pellentesque
             ulum, purus mauris posuere odio, at imperdiet eros
              tortor eu nibh. Donec nec felis eu augue auctor gravida.
              Praesent euismod nisi et erat pretium, a consectetur orci
              commodo. Sed laoreet iaculis molestie. Curabitur euismod
              volutpat massa, eu bibendum velit convallis eu. Nullam eu
              libero at leo lobortis blandit. Nullam suscipit nec lectus
              quis aliquet. Integer euismod semper venenatis. Donec
              consectetur tincidunt turpis. In hac habitasse platea dictumst.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
  
      <!-- Add more v-card components with read more functionality -->
  
    </div>
  </template>
  
  <script>
  export default {
    data: () => ({
      show: false,
    }),
  };
  </script>
  