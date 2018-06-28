<template>
  <header :class="{ small: nav, 'd-flex': nav }">
    <nav class="navbar navbar-light">
      <router-link to="/"><a class="navbar-brand brand" href="#">Cat app</a></router-link>
    </nav>
    <div :class="{ container: true, small: nav }">
      <h1 class="title">{{ title }}</h1>
      <template v-if="trending">
        <p>{{ meta }}</p>
        <input class="form-control search">
        <p class="trend">{{ trending }}</p>
      </template>
    </div>
    <img :src="src" class="bg-image" alt="Cat">
  </header>
</template>

<script>
import bgDefault from '@/assets/cat.jpeg'

export default {
  name: 'Header',
  props: {
    title: {
      type: String,
      default: 'Cat Game',
    },
    meta: {
      type: String,
      default:
        'Beautiful, free photos. Gifted by the world’s most generous community of photographers. 🎁',
    },
    src: {
      type: String,
      default: bgDefault,
    },
    nav: {
      type: Boolean,
      default: false,
    },
    trending: {
      type: String,
      default: 'Trending searches:business, computer, nature, lovehouse',
    },
  },
}
</script>

<style lang="scss" scoped>
header {
  height: 50vh;
  &.small {
    height: 64px;
  }
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

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

  .bg-image {
    position: absolute;
    top: -50%;
    bottom: 0;
    width: 100%;
    z-index: -1;
  }
}

.container {
  &.small {
    min-height: 0px;
    margin-top: 8px;
  }
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
