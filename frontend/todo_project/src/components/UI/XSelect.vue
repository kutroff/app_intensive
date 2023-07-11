<template>
  <select class="filter_selection" :value="value" @change="$emit('input', $event.target.value)">
    <option disabled value="">Выберите из списка</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "xSelect",
  props: {
    value: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.filter_selection {
  color:black;
  border-radius:8px;
  background: #EDF5E1;


}
</style>
