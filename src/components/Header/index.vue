<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand brand" href="#">Cat app</a>
      <button type="button" class="btn btn-info">Action</button>
    </nav>
    <div class="container">
      <h1 class="title">Cat Showcases</h1>
      <p>Beautiful, free photos. Gifted by the world’s most generous community of photographers. 🎁</p>
      <input class="form-control search">
      <p class="trend">Trending searches:business, computer, nature, lovehouse</p>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
header {
  background: url('~@/assets/headerbg3.jpg');
  background-size: cover;

  .brand {
    font-weight: 900;
    color: lightcoral;
    text-transform: uppercase;
  }

  .title {
    font-weight: 700;
    text-transform: uppercase;
  }

  .search {
    padding: 16px 32px;
    margin-bottom: 16px;
  }

  .trend {
    font-size: 12px;
  }
}
.container {
  min-height: 400px;
  padding: 80px 48px;
}
</style>
