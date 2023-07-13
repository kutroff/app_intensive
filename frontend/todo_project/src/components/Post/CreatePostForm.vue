<template>
  <form class="x-form_post" @submit.prevent="submitForm">
    <h3>Добавить заметку</h3>
    <x-input type="text" placeholder="Автор тега" v-model="post.author" :class="{ 'error': isFormSubmitted && !post.author }" />
    <p v-if="isFormSubmitted && !post.author" class="error-message">Пожалуйста, заполните поле Автор тега</p>

    <x-input type="text" placeholder="Заголовок" v-model="post.title" :class="{ 'error': isFormSubmitted && !post.title }" />
    <p v-if="isFormSubmitted && !post.title" class="error-message">Пожалуйста, заполните поле Заголовок</p>

    <x-input type="text" placeholder="Содержание" v-model="post.text" :class="{ 'error': isFormSubmitted && !post.text }" />
    <p v-if="isFormSubmitted && !post.text" class="error-message">Пожалуйста, заполните поле Содержание</p>

    <x-input type="text" placeholder="Опубликовано" v-model="post.status" v-mask="'##.##'" :class="{ 'error': isFormSubmitted && !post.status }" />
    <p v-if="isFormSubmitted && !post.status" class="error-message">Пожалуйста, заполните поле Опубликовано</p>

    <x-input type="text" placeholder="Теги" class="x_input" v-model="post.tags" v-mask="'##'" :class="{ 'error': isFormSubmitted && !post.tags }" />
    <p v-if="isFormSubmitted && !post.tags" class="error-message">Пожалуйста, заполните поле Теги</p>

    <x-button @click="submitForm">Добавить заметку</x-button>
  </form>
</template>

<script>
export default {
  name: "CreatePostForm",
  data() {
    return {
      isFormSubmitted: false,
      post: {
        author: '',
        title: '',
        text: '',
        status: '',
        tags: '',
      }
    }
  },
  methods: {
    submitForm() {
      this.isFormSubmitted = true;

      // Проверка на пустые поля
      if (!this.post.author || !this.post.title || !this.post.text || !this.post.status || !this.post.tags) {
        return;
      }

      this.$emit('create', { ...this.post });
      this.post.author = '';
      this.post.title = '';
      this.post.text = '';
      this.post.status = '';
      this.post.tags = '';
      this.isFormSubmitted = false;
    }
  }
}
</script>

<style scoped>
.x-form_post {
  background: whitesmoke;
  padding: 20px;
  border-radius: 8px;
//gap: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
//margin-bottom: 20px;
}
.error {
  border-color: red;
}
.error-message {
  color: red;
  margin-top: 1px;
  font-size: 15px;
}
</style>