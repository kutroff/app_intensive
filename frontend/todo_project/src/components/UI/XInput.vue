<template>
  <input class="x_input" :value="value" @input="updateInput">
</template>

<script>
export default {
  name: "xInput",
  props: {
    value: [String, Number]
},
methods: {
    updateInput(event) {
      this.$emit("input", event.target.value)
    }
  }
}
</script>

<style scoped>
.x_input{
  height: 25px;
  padding: 5px;
  border: 1px solid black;
  font-size: 16px;
  border-radius: 5px;
  outline: 0;
  margin-bottom: 2px;
}
</style>