<template>
  <ul class="d-flex nav">
    <li class="active">Trending</li>
    <li>News</li>
  </ul>
</template>

<script>
export default {
  name: 'Navigator',
}
</script>

<style lang="scss" scoped>
.nav {
  margin-bottom: 16px;
  li {
    padding: 8px 16px;
    cursor: pointer;
    transition-duration: 0.2s;
    border-radius: 4px;
    &:hover {
      background-color: whitesmoke;
    }
    &.active {
      border-bottom: 2px solid salmon;
    }
  }
}
</style>

