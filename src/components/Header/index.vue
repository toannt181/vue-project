<template>
  <header>
    <h1>Cat Showcases</h1>
    <p>Beautiful, free photos. Gifted by the world’s most generous community of photographers. 🎁</p>
    <input>
    <p class="trend">Trending searches:business, computer, nature, lovehouse</p>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
header {
  min-height: 360px;
  background: url('~@/assets/headerbg3.jpg');
  background-size: cover;
  padding: 32px 48px;
}
</style>
