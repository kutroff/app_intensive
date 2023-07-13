<template>
  <main class="x-content">
    <x-modal v-model="createAuthorFormVisible">
      <create-author-form @create="addAuthor"></create-author-form>
    </x-modal>
    <x-modal v-model="createPostFormVisible">
      <create-post-form @create="addPost"></create-post-form>
    </x-modal>
    <x-modal v-model="createTagFormVisible">
      <create-tag-form @create="addTag"></create-tag-form>
    </x-modal>
    <div class="border-line">
      <div class="block-header">
        <h2 class="block-title">Список авторов</h2>
        <div class="block-header_sorting-add">
          <x-select v-model="selectedSortAuthors" :options="sortOptionsAuthors"></x-select>
          <x-button class="x-append" @click="createAuthorFormVisible = true"
                    style="margin-left: auto; margin-right: 10px">
            Добавить
          </x-button>
        </div>
      </div>
      <authors-list :authors="sortedAuthors" @remove="removeAuthor"></authors-list>
    </div>

    <div class="border-line">
      <div class="block-header">
        <h2 class="block-title">Список постов</h2>
        <div class="block-header_sorting-add">
          <x-select v-model="selectedSortPosts" :options="sortOptionsPosts"></x-select>
          <x-button class="x-append" @click="createPostFormVisible = true"
                    style="margin-left: auto; margin-right: 10px">
            Добавить
          </x-button>
        </div>
      </div>
      <post-list :posts="sortedPosts" @remove="removePost"></post-list>
    </div>

    <div class="border-line">
      <div class="block-header">
        <h2 class="block-title">Список тегов</h2>
        <div class="block-header_sorting-add">
          <x-select v-model="selectedSortTags" :options="sortOptionsTags"></x-select>
          <x-button class="x-append" @click="createTagFormVisible = true"
                    style="margin-left: auto; margin-right: 10px">
            Добавить
          </x-button>
        </div>
      </div>
      <tag-list :tags="sortedTags" @remove="removeTag"></tag-list>
    </div>
  </main>
</template>

<script>
import CreateAuthorForm from '@/components/Author/CreateAuthorForm.vue';
import AuthorsList from "@/components/Author/AuthorsList.vue";
import CreatePostForm from "@/components/Post/CreatePostForm.vue";
import PostList from "@/components/Post/PostList.vue";
import CreateTagForm from "@/components/Tag/CreateTagForm.vue";
import TagList from "@/components/Tag/TagList.vue";
import XModal from "@/components/UI/XModal.vue";
import XSelect from "@/components/UI/XSelect.vue";
import XButton from "@/components/UI/XButton.vue";

export default {
  name: "AppCounter",
  components: {
    AuthorsList,
    CreateAuthorForm,
    CreatePostForm,
    PostList,
    TagList,
    CreateTagForm,
    XButton,
    XModal,
    XSelect,
  },
  data() {
    return {
      authors: [
        { id: 1, name: "Николай", email: "a@yandex.com", age: 18 },
        { id: 2, name: "Андрей", email: "b@yandex.com", age: 27 },
        { id: 3, name: "Иван", email: "c@yandex.com", age: 24 },
      ],
      posts: [
        {
          id: 1,
          author: 'Николай',
          title: 'Учеба',
          text: 'Сделать дз по интенсиву',
          status: '21.45',
          tags: 1,
        },
        {
          id: 2,
          author: 'Иван',
          title: 'Работа',
          text: 'Сдать проект',
          status: '13.00',
          tags: 2,
        },
      ],
      tags: [
        {
          id: 1,
          name: 'Учебная деятельность',
          description: "Ученье свет - неученье тьма",
          num_posts: '2',
        },
        {
          id: 2,
          name: 'Рабочая деятельность',
          description: "Без труда не выловишь рыбку из пруда",
          num_posts: '1',
        },
      ],
      createAuthorFormVisible: false,
      createPostFormVisible: false,
      createTagFormVisible: false,
      selectedSortAuthors: "",
      sortOptionsAuthors: [
        { value: 'id', name: "По id" },
        { value: 'name', name: "По имени" },
        { value: 'email', name: "По почте" },
        { value: 'age', name: "По возрасту" },
      ],
      selectedSortPosts: "",
      sortOptionsPosts: [
        { value: 'id', name: "По id" },
        { value: 'author', name: "По имени автора" },
        { value: 'title', name: 'По заголовку заметки' },
        { value: 'text', name: 'По тексту' },
        { value: 'status', name: 'По времени создания' },
        { value: 'tags', name: 'По количеству тегов' },
      ],
      selectedSortTags: "",
      sortOptionsTags: [
        { value: 'id', name: "По id" },
        { value: "name", name: 'По названию тега' },
        { value: "description", name: 'По описанию тега'},
        { value: "num_posts", name: 'По количеству заметок' },
      ],
      nextAuthorId: 4,
      nextPostId: 3,
      nextTagId: 3,
    }
  },
  computed: {
    sortedAuthors() {
      return [...this.authors].sort((author1, author2) => {
        if (this.selectedSortAuthors === "id") {
          return author2.id - author1.id;
        } else if (this.selectedSortAuthors === "age") {
          return author1.age - author2.age;
        } else {
          return author1[this.selectedSortAuthors]?.localeCompare(
              author2[this.selectedSortAuthors]
          );
        }
      });
    },
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        if (this.selectedSortPosts === "id") {
          return post2.id - post1.id;
        } else if (this.selectedSortPosts === "status") {
          return post1.status - post2.status;
        } else if (this.selectedSortPosts === "tags") {
          return post2.status - post1.status;
        } else {
          return post1[this.selectedSortPosts]?.localeCompare(
              post2[this.selectedSortPosts]
          );
        }
      });
    },
    sortedTags() {
      return [...this.tags].sort((tag1, tag2) => {
        if (this.selectedSortTags === "id") {
          return tag2.id - tag1.id;
        } else if (this.selectedSortTags === "num_posts") {
          return tag1.num_posts - tag2.num_posts;
        } else {
          return tag1[this.selectedSortTags]?.localeCompare(
              tag2[this.selectedSortTags]
          );
        }
      });
    },
  },
  methods: {
    addAuthor(author) {
      author.id = this.nextAuthorId;
      this.authors.push(author);
      this.createAuthorFormVisible = false;
      this.nextAuthorId++;
    },
    addPost(post) {
      post.id = this.nextPostId;
      this.posts.push(post);
      this.createPostFormVisible = false;
      this.nextPostId++;
    },
    addTag(tag) {
      tag.id = this.nextTagId;
      this.tags.push(tag);
      this.createTagFormVisible = false;
      this.nextTagId++;
    },
    removeAuthor(author) {
      this.authors = this.authors.filter((elem) => elem.id !== author.id);
    },
    removePost(post) {
      this.posts = this.posts.filter((elem) => elem.id !== post.id);
    },
    removeTag(tag) {
      this.tags = this.tags.filter((elem) => elem.id !== tag.id);
    },

  },
};
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
.block-header {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-between;

}
.border-line h2 {
  font-size: 20px;
}
</style>
