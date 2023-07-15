<template>
  <x-modal v-model="showModal">
    <form @submit.prevent="login" class="x-login-forms">
      <x-input type="text" placeholder="Username" v-model="username"/>
      <x-input type="password" placeholder="Password" v-model="password"/>
      <x-button type="sumbit">
        Войти в TODO
      </x-button>
    </form>
    </x-modal>
</template>

<script>
import axios from "axios";

export default {
  name: "LoginPage",
  data()  {
    return {
      username: '',
      password: '',
      showModal: true
    }
  },
  methods: {
    login() {
      this.$ajax.post('api-token-auth/',  {
        username: this.username,
        password: this.password,
      }).then(response => {
        const token = response.data.token
        localStorage.setItem('token', token)
        this.$router.push('/')
      })
    }
  }
}
</script>
<style scoped>
.x-login-forms {
  display: flex;
  flex-direction: column;
}
</style>