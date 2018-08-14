<template>
  <div>
    <select :value="value" @change="$emit('input', $event.target.value)">
      <option v-for="option in options">{{ option }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SelectList',
  props: ['label', 'options', 'value'],
}
</script>
