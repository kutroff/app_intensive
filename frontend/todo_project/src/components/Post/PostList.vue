<template>
  <div>
    <div v-if="posts.length > 0">
      <table class="x-table">
        <thead class="x-table_thead">
        <tr class="x-table_thead-row">
          <th class="x-table_thead-colon">id</th>
          <th class="x-table_thead-colon">Автор заметки</th>
          <th class="x-table_thead-colon">Заголовок</th>
          <th class="x-table_thead-colon">Содержание заметки</th>
          <th class="x-table_thead-colon">Опубликовано</th>
          <th class="x-table_thead-colon">Теги</th>
          <th class="x-table_thead-colon"></th>
        </tr>
        </thead>
        <transition-group name="fade" tag="tbody" class="x-table_tbody">
          <tr class="x-table_tbody-row" v-for="post in posts" :key="post.id">
            <td class="x-table_tbody-colon">{{ post.id }}</td>
            <td class="x-table_tbody-colon">{{ post.author_name}}</td>
            <td class="x-table_tbody-colon">{{ post.title }}</td>
            <td class="x-table_tbody-colon">{{ post.text }}</td>
            <td class="x-table_tbody-colon">{{ post.status }}</td>
            <td class="x-table_tbody-colon">{{ post.tags }}</td>
            <td class="x-table_tbody-colon">
              <x-button class="warning" @click="editPost(post)">Редактировать</x-button>
              <x-button class="warning" @click="$emit('remove', post)">Удалить</x-button>
            </td>
          </tr>
        </transition-group>
      </table>
    </div>
    <div v-else style="color: orangered;">
      Заметки не добавлены
    </div>
  <edit-post-form :value="editVisible"  :post="editingPost" @update="updatePost" @close="editVisible = false" />
  </div>
</template>
<script>
import EditPostForm from "@/components/EditPostForm.vue";
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  components: {
    EditPostForm,
  },
  name: "PostsList",
  data() {
    return {
      editVisible: false,
      editingPost: {}
    };
  },
  methods: {
    editPost(post) {
      this.editingPost = { ...post };
      this.editVisible = true;
    },

    updatePost(updatedPost) {
      // Обновление данных на сайте после редактирования
      const index = this.posts.findIndex((post) => post.id === updatedPost.id);
      if (index !== -1) {
        this.$set(this.posts, index, updatedPost);
      }
      this.editVisible = false; // Закрываем модальное окно после сохранения изменений
    },
  }
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.3s;
}

.fade-move {
  transition: transform .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.empty-chefs-enter-active, .empty-chefs-leave-active {
  transition: all 1s;
}

.empty-chefs-enter, .empty-chefs-leave-to
{
  opacity: 0;
}

.x-table {
  background: #6eaff1;
  padding: 30px;
  border-radius: 5px;
  width: 100%;
}

.x-table_thead-row {
  font-size: 15px;
  background: #b7e7ff;
  color: #0f0f0f;
}

.x-table_tbody-row {
  background: #edf5e1;
  color: #0f0f0f;
}

.x-table_thead-colon,
.x-table_tbody-colon {
  text-align: center;
  width: 20%;
}
</style>