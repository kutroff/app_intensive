<template>
  <div>
    <ul class="tag-list">
      <h3>Список тегов</h3>
      <li class="tag-item" v-for="tag in tags" v-bind:key="tag.id">
        <p><strong>id: </strong>{{tag.id}}</p>
        <p><strong>Название тега: </strong>{{tag.name}}</p>
        <p><strong>Описание тега: </strong>{{tag.description}}</p>
        <p><strong>Количество постов с таким тегом: </strong>{{tag.num_posts}}</p>
      </li>
    </ul>
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

.tag-list h3{
  margin-bottom: 7px;
}
.tag-item {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  margin-top: 15px;
  border-radius: 5px;
  background: lightskyblue;
}
</style>
