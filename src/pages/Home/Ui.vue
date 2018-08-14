<template>
  <div>
    <h3>inner input</h3>
    <input :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'Ui',
  props: ['value'],
  model: {
    prop: 'value',
    event: 'input',
  },
}
</script>
