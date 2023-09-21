<template>
    <v-card>
      <v-layout>
        <!--   color="yellow" -->
        <!-- image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" -->
        <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
          permanent
          theme="dark"
        >
        
          <v-list nav>
        <img src="../assets/AI.png" alt="">
            <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
            <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors"></v-list-item>
            <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
            <v-list-item prepend-icon="#" title="Inbox" value="#1"></v-list-item>
            <v-list-item prepend-icon="#" title="Supervisors" value="#2"></v-list-item>
            <v-list-item prepend-icon="#" title="Clock-in" value="#3"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <!-- <v-main style="height: 250px">    </v-main> -->
    
      </v-layout>
    </v-card>
    

    
  </template>

  <script>
  import HelloWorld from '../../layouts/HelloWorld.vue';
import layout from './layout.vue';
</script>




<!--  image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" -->