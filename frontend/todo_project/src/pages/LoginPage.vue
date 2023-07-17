<template>
    <x-modal v-model="showModal">
      <form @submit.prevent="loginUser" class="x-login-forms">
        <x-input type="text" placeholder="Username" v-model="username"/>
        <x-input type="password" placeholder="password" v-model="password"/>
        <x-button type="submit">
          Войти в TODO
        </x-button>
      </form>
    </x-modal>
</template>
<script>

import {mapActions} from "vuex";

export default {
  name: "LoginPage",
  data() {
    return {
      username: "",
      password: "",
      showModal: true
    }
  },
  methods: {
    ...mapActions(["post/login"]),
    loginUser() {
      this["post/login"]({ username: this.username, password: this.password, router: this.$router });
    }
  }
};
</script>
<style scoped>
.x-login-forms {
  display: flex;
  flex-direction: column;
}
</style>