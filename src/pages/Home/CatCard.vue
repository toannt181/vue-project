<template>
  <div class="card">
    <div class="header">
      <button v-if="loveAction" type="button" class="btn btn-danger btn-small">Love</button>
    </div>
    <img class="card-img" :src="cat" />
    <!-- <div class="footer">
      <p class="author">{{ cat }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'CatCard',
  props: {
    cat: {
      type: String,
    },
    loveAction: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  min-height: 150px;
  margin-bottom: 32px;

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
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 10px;
    color: whitesmoke;
    padding: 4px;
  }
}
</style>
