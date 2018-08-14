<template>
  <div>
    <label>
      {{ label }}
      <input :placeholder="placeholder" :value="value" @input="$emit('input', $event.target.value)" />  
    </label>
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  props: ['label', 'placeholder', 'value'],
}
</script>

