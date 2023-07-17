<template>
  <div class="main-block">
    <div class = "x-header-block">
      <app-header></app-header>
    </div>
    <div class="x-block">
      <main class = "x-content">
        <app-content></app-content>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppContent from "@/components/AppContent.vue";


export default {
  name:"PostPage",
  components: {AppContent,AppHeader}
}
</script>

<style scoped>

</style>