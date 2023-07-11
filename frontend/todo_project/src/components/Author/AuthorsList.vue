<template>
  <div>
    <div v-if="authors.length > 0">
      <table class="x-table">
        <thead class="x-table_thead">
        <tr class="x-table_thead-row">
          <th class="x-table_thead-colon">id</th>
          <th class="x-table_thead-colon">Имя</th>
          <th class="x-table_thead-colon">Email</th>
          <th class="x-table_thead-colon">Возраст</th>
          <th class="x-table_thead-colon"></th>
        </tr>
        </thead>
        <tbody class="x-table_tbody" v-for="author in authors" v-bind:key="author.id">
        <tr class="x-table_tbody-row">
          <td class="x-table_tbody-colon">{{ author.id }}</td>
          <td class="x-table_tbody-colon">{{ author.name }}</td>
          <td class="x-table_tbody-colon">{{ author.email }}</td>
          <td class="x-table_tbody-colon">{{ author.age }}</td>
          <td class="x-table_tbody-colon">
            <x-button class="warning" @click="$emit('remove', author)">Удалить</x-button>
          </td>

        </tr>
        </tbody>
      </table>
    </div>
    <div v-else style="color: orangered;">
      Авторы не созданы
    </div>
  </div>
</template>


<script>
export default {
  props: {
    authors: {
      type: Array,
      required: true,
    }
  },
  name:"AuthorsList"
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
