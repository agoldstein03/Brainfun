import Vue from 'vue'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import App from './App.vue'
import { MdButton, MdToolbar, MdList, MdDrawer, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css' 

import Login from "./views/Login.vue"
import Main from "./views/Main.vue"

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdToolbar)
Vue.use(MdList)
Vue.use(MdDrawer)
Vue.use(MdIcon)
Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login,
      meta: {
        guest: true
      }
    },
    {
      path: "/app",
      name: "App",
      component: Main,
      meta: {
        auth: true,
      }
    }
  ]
})

//todo: manage logging in here

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
