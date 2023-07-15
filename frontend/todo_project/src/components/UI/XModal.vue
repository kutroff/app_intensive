<template>
  <div class="x-modal" v-if="value === true" @click="$emit('input', false)">
    <div class="x-modal-content" @click.stop>
      <slot></slot>
    </div>
  </div>

</template>

<script>
export default {
  name: "xModal",
  props: {
    value: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.x-modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0,0,0, 0.5);
  position: fixed;
  display: flex;
}

.x-modal-content {
  margin: auto;
  background: cornflowerblue;
  border-radius: 10px;
  min-height: 50px;
  min-width: 300px;
  padding: 20px;
}
</style>
