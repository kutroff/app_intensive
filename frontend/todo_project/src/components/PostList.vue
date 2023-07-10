<template>
  <div>
    <ul class="post-list">
      <h3>Список заметок</h3>
      <li class="x-item" v-for="post in posts" v-bind:key="post.id">
        <p><strong>id: </strong>{{post.id}}</p>
        <p><strong>Автор заметки: </strong>{{post.author}}</p>
        <p><strong>Заголовок: </strong>{{post.title}}</p>
        <p><strong>Содержание заметки: </strong>{{post.text}}</p>
        <p><strong>Опубликовано: </strong>{{post.status}}</p>
        <p><strong>Теги: </strong>{{post.tags}}</p>
      </li>
    </ul>
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
.x-item {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  margin-top: 15px;
  border-radius: 5px;
  background: lightskyblue;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
}

.x-item p {
  margin-top: 5px;
  margin-bottom: 5px;
}
</style>