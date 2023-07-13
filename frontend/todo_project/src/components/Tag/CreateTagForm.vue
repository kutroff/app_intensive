<template>
  <form class="x-form_tag" @submit.prevent="submitForm">
    <h3>Добавить тег</h3>
    <x-input type="text" placeholder="Название тега" v-model="tag.name" :class="{ 'error': isFormSubmitted && !tag.name }" />
    <p v-if="isFormSubmitted && !tag.name" class="error-message">Пожалуйста, заполните поле Название тега</p>

    <x-input type="text" placeholder="Описание тега" v-model="tag.description" :class="{ 'error': isFormSubmitted && !tag.description }" />
    <p v-if="isFormSubmitted && !tag.description" class="error-message">Пожалуйста, заполните поле Описание тега</p>

    <x-input type="text" placeholder="Кол-во постов с этим тегом" v-model="tag.num_posts" v-mask="'##'" :class="{ 'error': isFormSubmitted && !tag.num_posts }" />
    <p v-if="isFormSubmitted && !tag.num_posts" class="error-message">Пожалуйста, заполните поле Кол-во постов с этим тегом</p>

    <x-button @click="submitForm">Добавить тег</x-button>
  </form>
</template>

<script>
export default {
  name: "CreateTagForm",
  data() {
    return {
      isFormSubmitted: false,
      tag: {
        name: '',
        description: '',
        num_posts: '',
      }
    }
  },
  methods: {
    submitForm() {
      this.isFormSubmitted = true;

      // Проверка на пустые поля
      if (!this.tag.name || !this.tag.description || !this.tag.num_posts) {
        return;
      }

      this.$emit('create', { ...this.tag });
      this.tag.name = '';
      this.tag.description = '';
      this.tag.num_posts = '';
      this.isFormSubmitted = false;
    }
  }
}
</script>


<style scoped>
.x-form_tag {
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