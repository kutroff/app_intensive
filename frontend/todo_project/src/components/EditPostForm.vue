<template>
  <x-modal v-model="editVisible">
    <div class="x-modal-content">
      <h3>Редактировать заметку</h3>
      <x-input type="text" placeholder="Автор тега" v-model="editedPost.author" />
      <x-input type="text" placeholder="Заголовок" v-model="editedPost.title" />
      <x-input type="text" placeholder="Содержание" v-model="editedPost.text" />
      <x-input type="text" placeholder="Опубликовано" v-model="editedPost.status" />
      <x-input type="text" placeholder="Теги" v-model="editedPost.tags" />

      <x-button @click="saveChanges">Сохранить</x-button>
      <x-button @click="closeModal">Отмена</x-button>
    </div>
  </x-modal>
</template>

<script>
export default {
  name: "EditPostForm",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    post: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editVisible: false,
      editedPost: {}
    };
  },
  watch: {
    value(newValue) {
      this.editVisible = newValue;
    },
    post: {
      handler(newValue) {
        this.editedPost = { ...newValue };
      },
      immediate: true
    }
  },
  methods: {
    saveChanges() {
      this.$ajax
          .put(`api/post/${this.editedPost.id}`, { ...this.editedPost })
          .then(() => {
            this.$emit("update", { ...this.editedPost });
            this.closeModal(); // Закрываем модальное окно после успешного сохранения
          })
          .catch((error) => {
            // Обработка ошибок при сохранении
          });
    },
    closeModal() {
      this.$emit("input", false);
    }
  }
};
</script>

