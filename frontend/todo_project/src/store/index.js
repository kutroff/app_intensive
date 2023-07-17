import Vue from 'vue'
import Vuex from 'vuex'
import {postStore} from "@/store/postStore";

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        post: postStore
    }
})