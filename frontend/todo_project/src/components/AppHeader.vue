<template>
  <div>
    <header class="x-header">
      <strong class="x-header_my-name">Кутров Николай</strong>
      <div class = "x-header_fun-jock">Авторов добавлять только цифрами 1, 2, 3 а теги списками либо [ 1 ], либо [ 2 ]</div>
      <button class = "x-header_btn" @click="onLogout"> Выход</button>
    </header>
  </div>
</template>

<script>
export default{
  name:"AppHeader",
  methods: {
    onLogout() {
      this.$store.commit('post/removeToken')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.x-header{
  padding:  10px;
  display: flex;
  justify-content: space-between;
  border-radius: 5px;
  background: #b7e7ff;
  align-items: center;

}
.x-header_btn{
  padding: 10px;
  border-radius: 8px;
  color: #b7e7ff;
  cursor: pointer;
  background: #6EAFF1;
}

</style>

