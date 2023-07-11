<template>
  <form class="x-form_author" @submit.prevent>
      <h3>Добавить автора</h3>
      <x-input  type="text" placeholder="Имя"  v-model="author.name"/>
      <x-input  type="text" placeholder="Email"  v-model="author.email"/>
      <x-input  type="text" placeholder="Возраст"  v-model="author.age"/>
      <x-button  @click="addAuthor">Добавить автора</x-button>
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
.x-form_author {
  background: whitesmoke;
  padding: 20px;
  border-radius: 8px;
  gap: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-bottom: 20px;
}
</style>