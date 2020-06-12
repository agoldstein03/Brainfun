import Vue from 'vue'
import App from './App.vue'
import { MdButton, MdToolbar, MdList, MdDrawer, MdIcon } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(MdButton)
Vue.use(MdToolbar)
Vue.use(MdList)
Vue.use(MdDrawer)
Vue.use(MdIcon)
new Vue({
  render: h => h(App),
}).$mount('#app')
