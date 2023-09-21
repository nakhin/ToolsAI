import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// router

// Framework UI
import "vuetify/styles";
import {createVuetify} from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import router from './router';


// 
const vuetify =createVuetify({ 
components,
directives,


});


let app = createApp(App)
app.use(vuetify)
app.use(router)

app.mount('#app')
