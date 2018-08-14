<template>
  <div>
    <label>
      {{ label }}
      <input type="checkbox" :checked="value" @change="$emit('input', $event.target.checked)" />  
    </label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: ['label', 'value'],
}
</script>

