<template>
  <div>
    <div v-if="tags.length > 0">
      <table class="x-table">
        <thead class="x-table_thead">
        <tr class="x-table_thead-row">
          <th class="x-table_thead-colon">id</th>
          <th class="x-table_thead-colon">Название тега</th>
          <th class="x-table_thead-colon">Описание тега</th>
          <th class="x-table_thead-colon">Количество постов с таким тегом</th>
          <th class="x-table_thead-colon"></th>
        </tr>
        </thead>
        <tbody class="x-table_tbody" v-for="tag in tags" v-bind:key="tag.id">
        <tr class="x-table_tbody-row">
          <td class="x-table_tbody-colon">{{ tag.id }}</td>
          <td class="x-table_tbody-colon">{{ tag.name }}</td>
          <td class="x-table_tbody-colon">{{ tag.description }}</td>
          <td class="x-table_tbody-colon">{{ tag.num_posts }}</td>
          <td class="x-table_tbody-colon">
            <x-button class="warning" @click="$emit('remove', tag)">Удалить</x-button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-else style="color: orangered;">
      Теги не созданы
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      required: true,
    }
  },
  name: "TagsList"
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
