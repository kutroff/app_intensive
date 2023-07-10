<template>
  <main class="x-content">
    <div class ="border-line">
    <h2>Авторы</h2>
    <create-author-form @create="addAuthor"></create-author-form>
    <authors-list :authors="authors"></authors-list>
    </div>
    <div class = "border-line">
     <h2>Заметки</h2>
    <create-post-form @create="addPost"></create-post-form>
    <post-list :posts="posts"></post-list>
    </div>
    <div class = "border-line">
     <h2>Теги</h2>
     <create-tag-form @create="addTags"></create-tag-form>
     <tag-list :tags="tags"></tag-list>

    </div>
  </main>
</template>

<script>
import CreateAuthorForm from '@/components/CreateAuthorForm.vue';
import AuthorsList from "@/components/AuthorsList.vue";
import CreatePostForm from "@/components/CreatePostForm.vue";
import PostList from "@/components/PostList.vue";
import CreateTagForm from "@/components/CreateTagForm.vue";
import TagList from "@/components/TagList.vue";
export default {
  name:"AppCounter",
  components:{AuthorsList, CreateAuthorForm, CreatePostForm, PostList, TagList,CreateTagForm},
  data() {
    return {
      authors: [
        {id:1, name: "Николай", email:"a@yandex.ru", age:"18" },
        {id:2, name: "Андрей", email:"b@yandex.ru", age:"25" }
      ],
      posts: [
        {
          id:1,
          author: "Николай",
          title:"Учёба",
          text:"Сделать страницу приложения на базе фреймворка",
          status:"Да",
          tags:"1"
        },
        {
          id:2,
          author: "Андрей",
          title:"Работа",
          text:"Разобраться с бумажной работой",
          status:"Да",
          tags:"1"
        }
      ],
      tags: [
        {
          id:1,
          name: "Учебная деятельность",
          description: "Ученье — свет, а неученье — тьма.",
          num_posts: 1
        }
      ],

      nextAuthorId: 2,
      nextPostId: 2,
      nextTagId: 1,
    }
  },
  methods: {
    addAuthor(author) {
      this.nextAuthorId++;
      author.id = this.nextAuthorId;
      this.authors.push(author);
    },
    addPost(post) {
      this.nextPostId++;
      post.id = this.nextPostId;
      this.posts.push(post);
    },
    addTags(tag) {
      this.nextTagId++;
      tag.id = this.nextTagId;
      this.tags.push(tag);
    }
  }


}
</script>
<style scoped>
.x-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.border-line {
  padding: 20px;
  border: #6EAFF1 solid 5px;
  border-radius: 10px;
}

.border-line h2 {
  font-size: 20px;
}
</style>

