<template>
  <form class="x-form" @submit.prevent>
      <h3>Добавить автора</h3>
      <input class="x-form_input" type="text" placeholder="Имя"  v-model="author.name">
      <input class="x-form_input" type="text" placeholder="Email"  v-model="author.email">
      <input class="x-form_input" type="text" placeholder="Возраст"  v-model="author.age">
      <button class="x-btn" @click="addAuthor">Добавить автора</button>
    </form>


</template>

<script>
export default {
  name: "CreateAuthorForm",
  data() {
    return {
      author: {
        name: '',
        email: '',
        age: '',
      }
    }
  },
  methods: {
    addAuthor() {
      this.$emit('create', {...this.author})
      this.author.name = ''
      this.author.email = ''
      this.author.age = ''
    }
  }
}
</script>

<style scoped>
.x-form {
  background: whitesmoke;
  padding: 20px;
  border-radius: 8px;
  gap: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
}

.x-form_input {
  height: 25px;
  padding: 5px;
  border: 1px solid #e2e2e2;
  font-size: 16px;
  border-radius: 5px;
  outline: 0;
  margin-bottom: 10px;
}
.x-btn{
  padding: 12px;
  border-radius: 10px;
  cursor: pointer;
  width: max-content;
  color: #5897fb;
  outline: none;
  border: none;
}
</style>