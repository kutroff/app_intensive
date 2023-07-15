import Vue from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import './inputmask'
import router from "@/router/router"
import axios from "@/plugins/axios";

Vue.config.productionTip = false

Vue.use(axios)

components.forEach(component => Vue.component(component.name, component))

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
