<template>
  <div>
    <button :Ti-TLE="tinTan">i am a button</button>
  </div>
</template>

<script>
export default {
  name: 'button',
  data() {
    return { name: 'hehe' }
  },
  created() {
    console.log('mixin creat')
  },
}
</script>

<style lang="scss" scoped>
button {
  padding: 14px 18px;
  background-color: green;
  border-radius: 2px;
  font-size: 14px;
  transition: all 0.1s ease-in-out;
  text-transform: capitalize;
  margin-right: 4px;
}
</style>
