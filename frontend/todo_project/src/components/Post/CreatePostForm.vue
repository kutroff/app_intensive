<template>
    <form class="x-form_post" @submit.prevent>
      <h3>Добавить заметку</h3>
      <x-input type="text" placeholder="Автор тега" v-model="post.author"/>
      <x-input type="text" placeholder="Заголовок"  v-model="post.title"/>
      <x-input type="text" placeholder="Содержание"  v-model="post.text"/>
      <x-input type="text" placeholder="Опубликовано"  v-model="post.status"/>
      <x-input type="text" placeholder="Теги" class="x_input" v-model="post.tags"/>
      <x-button @click="addPost">Добавить заметку</x-button>
    </form>
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
.x-form_post {
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