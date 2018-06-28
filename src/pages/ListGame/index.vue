<template>
  <router-link :to="`/games/${game.id}`">
    <div class="card">
      <!-- <div class="header">
      <button v-if="loveAction" type="button" class="btn btn-danger btn-small">Love</button>
    </div> -->
      <img class="card-img" :src="game.img" />
      <div class="footer d-flex align-items-center flex-column justify-content-center">
        <p class="author">{{ game.title }}</p>
        <p class="meta">{{ game.meta }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ListGame',
  props: {
    game: Object,
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  min-height: 150px;
  margin-bottom: 32px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.25s;

  .header {
    text-align: right;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }

  .footer {
    text-align: right;
    position: absolute;
    bottom: -50%;
    left: 0;
    right: 0;
    height: 50%;
    color: whitesmoke;
    background: rgba(0, 0, 0, 0);
    padding-right: 16px;
    transition: 0.25s;

    .author {
      font-size: 20px;
    }

    .meta {
      font-size: 14px;
    }
  }

  &:hover {
    box-shadow: 6px 6px 16px rgba(0, 0, 0, 0.3);
    transform: translate(-8px, -8px);

    .footer {
      height: 100%;
      bottom: 0;

      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 1)
      );
      .author {
        font-size: 30px;
      }
    }
  }
}
</style>
