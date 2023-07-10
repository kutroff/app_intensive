<template>
  <form class="x-form" @submit.prevent>
      <h3>Добавить тег</h3>
      <input type="text" placeholder="Название тега" class="x-form_input" v-model="tag.name">
      <input type="text" placeholder="Описание тега" class="x-form_input" v-model="tag.description">
      <input type="text" placeholder="Кол-во постов с этим тегом" class="x-form_input" v-model="tag.num_posts">
      <button class="x-btn" @click="addTag">Добавить автора</button>
    </form>
</template>
<script>
export default {
  name: "CreateTagForm",
  data() {
    return {
      tag: {
        name: '',
        description: '',
        num_posts: '',
      }
    }
  },
  methods: {
    addTag() {
      this.$emit('create', {...this.tag})
      this.tag.name=''
      this.tag.description=''
      this.tag.num_posts=''
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