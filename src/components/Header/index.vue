<template>
  <header>
    <nav class="navbar navbar-light">
      <a class="navbar-brand brand" href="#">Cat app</a>
    </nav>
    <div class="container">
      <h1 class="title">Cat Game</h1>
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
  background: url('~@/assets/cat.jpeg');
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;

  nav {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    .brand {
      font-weight: 900;
      color: lightcoral;
      text-transform: uppercase;
    }
  }
}

.container {
  min-height: 400px;
  padding: 80px 48px;
  color: white;

  .title {
    font-size: 60px;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-size: 30px;
  }

  .search {
    padding: 16px 32px;
    margin-bottom: 16px;
  }

  .trend {
    font-size: 14px;
  }
}
</style>
