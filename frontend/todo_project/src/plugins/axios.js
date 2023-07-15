import axios from "axios";

axios.defaults.baseURL = 'https://nikolai.pythonanywhere.com/'

export default {
    install(Vue) {
        Vue.prototype.$ajax = axios
    }
}