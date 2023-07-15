<template>
  <transition name="fade" enter-active-class="fade-enter-active" leave-active-class="fade-leave-active">
    <form class="x-form_author" @submit.prevent="submitForm">
      <h3>Добавить автора</h3>
      <x-input type="text" placeholder="Имя" v-model="author.name" :class="{ 'error': isFormSubmitted && !author.name }" />
      <p v-if="isFormSubmitted && !author.name" class="error-message">Пожалуйста, заполните поле Имя</p>

      <x-input type="text" placeholder="Email" v-model="author.email" :class="{ 'error': isFormSubmitted && !author.email }" />
      <p v-if="isFormSubmitted && !author.email" class="error-message">Пожалуйста, заполните поле Email</p>

      <x-input type="text" placeholder="Возраст" v-model="author.age" v-mask="'##'" :class="{ 'error': isFormSubmitted && !author.age }" />
      <p v-if="isFormSubmitted && !author.age" class="error-message">Пожалуйста, заполните поле Возраст</p>

      <x-button @click="submitForm">Добавить автора</x-button>
    </form>
  </transition>
</template>

<script>
export default {
  name: "CreateAuthorForm",
  data() {
    return {
      isFormSubmitted: false,
      author: {
        name: '',
        email: '',
        age: '',
      }
    }
  },
  methods: {
    submitForm() {
      this.isFormSubmitted = true;

      // Проверка на пустые поля
      if (!this.author.name || !this.author.email || !this.author.age) {
        return;
      }

      this.$emit('create', { ...this.author });
      this.author.name = '';
      this.author.email = '';
      this.author.age = '';
      this.isFormSubmitted = false;
    }
  }
}
</script>

<style scoped>
.x-form_author {
  background: whitesmoke;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
}

.fade-enter-active {
  transition: opacity 0.5s, transform 0.3s;
}

.fade-leave-active {
  transition: opacity 0.5s, transform 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
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
