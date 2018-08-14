<template>
  <button>custome butotn{{ name }}</button>
</template>

<script>
import Button from './Button'

export default {
  name: 'CustomButton',
  mixins: [Button],
  data() {
    return { name: 'xx' }
  },
  created() {
    console.log('reborn again')
  },
}
</script>

<style lang="scss" scoped>
</style>
