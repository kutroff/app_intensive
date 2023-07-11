<template>
  <form class="x-form_tag" @submit.prevent>
      <h3>Добавить тег</h3>
    <x-input type="text" placeholder="Название тега"  v-model="tag.name"/>
    <x-input type="text" placeholder="Описание тега"  v-model="tag.description"/>
    <x-input type="text" placeholder="Кол-во постов с этим тегом"  v-model="tag.num_posts"/>
    <x-button  @click="addTag">Добавить тег</x-button>
    </form>
</template>
<script>
export default {
  name: "CreateTagForm",
  data() {
    return {
      tag: {
        name: '',
        description: '',
        num_posts: '',
      }
    }
  },
  methods: {
    addTag() {
      this.$emit('create', {...this.tag})
      this.tag.name=''
      this.tag.description=''
      this.tag.num_posts=''
    }
  }
}
</script>

<style scoped>
.x-form_tag {
  background: whitesmoke;
  padding: 20px;
  border-radius: 8px;
  gap: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-bottom: 20px;
}


</style>