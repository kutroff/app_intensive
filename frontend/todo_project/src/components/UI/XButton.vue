<template>
  <button class="x-btn" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "xButton"
}
</script>

<style scoped>
.x-btn {
  color: black;
  border-radius:10px;
  padding: 16px 24px;
  border: 1px solid #1b1b1b;
  background: green;
  font-size: 15px;
  margin-top: 5px;
  cursor: pointer;
}
.x-btn.warning {
  color: red;
  background: transparent;
  border-radius: unset;
  border: none;

}

.x-btn.warning:hover {
  text-decoration: underline;
}
</style>
