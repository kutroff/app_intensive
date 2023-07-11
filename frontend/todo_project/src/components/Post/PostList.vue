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
        <tbody class="x-table_tbody" v-for="post in posts" v-bind:key="post.id">
        <tr class="x-table_tbody-row">
          <td class="x-table_tbody-colon">{{ post.id }}</td>
          <td class="x-table_tbody-colon">{{ post.author }}</td>
          <td class="x-table_tbody-colon">{{ post.title }}</td>
          <td class="x-table_tbody-colon">{{ post.text }}</td>
          <td class="x-table_tbody-colon">{{ post.status }}</td>
          <td class="x-table_tbody-colon">{{ post.tags }}</td>
          <td class="x-table_tbody-colon">
            <x-button class="warning" @click="$emit('remove', author)">Удалить</x-button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else style="color: orangered;">
      Заметки не добавлены
    </div>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    }
  },
  name: "PostsList"
}
</script>

<style scoped>

.x-table{
  background: #6EAFF1;
  padding: 30px;
  border-radius: 5px;
  width: 100%;
}
.x-table_thead-row{
  font-size: 15px;
  background: #b7e7ff;
  color: #0f0f0f;
}
.x-table_tbody-row{
  background: #EDF5E1;
  color: #0f0f0f;
}

.x-table_thead-colon, .x-table_tbody-colon{
  text-align: center;
  width: 20%;
}


</style>
