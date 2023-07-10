<template>
  <div>
    <ul class = "author-list">
      <h3>Список авторов</h3>
      <li class="author-item" v-for="author in authors" v-bind:key="author.id">
        <p><strong>id:</strong>{{ author.id }}</p>
        <p><strong>Имя:</strong>{{ author.name }}</p>
        <p><strong>Email:</strong>{{ author.email }}</p>
        <p><strong>Возраст:</strong>{{ author.age }}</p>
      </li>
    </ul>
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
.author-item {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  margin-top: 15px;
  border-radius: 5px;
  background: lightskyblue;

}
.author-list h3{
  margin-bottom: 7px;
}


</style>
