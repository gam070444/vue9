import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
  // Initialize Cloud Firestore through Firebase
  
  if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyAcAnx5CzfWiKeI8SewwB_K88EG_sn5EQk",
      authDomain: "vue09-c9162.firebaseapp.com",
      projectId: "vue09-c9162",
      storageBucket: "vue09- c9162.appspot.com",
      messagingSenderId: "618669909968",
      appID: "1: 618669909968: wed: 7601a73060d323a790bbd5",
    }
    firebase.initializeApp(firebaseConfig);
  }
  Vue.config.productionTip = false

  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')  