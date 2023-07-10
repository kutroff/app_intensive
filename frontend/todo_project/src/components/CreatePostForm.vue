<template>
  <div>
    <form class="x-form" @submit.prevent>
      <h3>Добавить заметку</h3>
      <input type="text" placeholder="Автор тега" class="x-form_input" v-model="post.author">
      <input type="text" placeholder="Заголовок" class="x-form_input" v-model="post.title">
      <input type="text" placeholder="Содержание" class="x-form_input" v-model="post.text">
      <input type="text" placeholder="Опубликовано" class="x-form_input" v-model="post.status">
      <input type="text" placeholder="Теги" class="x-form_input" v-model="post.tags">
      <button class="x-btn" @click="addPost">Добавить заметку</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "CreatePostForm",
  data() {
    return {
      post: {
        author: '',
        title: '',
        text: '',
        status: '',
        tags: '',
      }
    }
  },
  methods:{
    addPost() {
      this.$emit('create', {...this.post})
      this.post.author = ''
      this.post.title = ''
      this.post.text = ''
      this.post.status = ''
      this.post.tags = ''
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