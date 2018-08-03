<template>
  <div>
      <button @click="cc">BUSSS</button>
    <ul class="d-flex nav">
      <li class="active">Trending</li>
      <li>News</li>
    </ul>
    <button @click="click"> click on me
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Navigator',
  props: {
    name: {
      type: String,
    },
    accept: {
      type: Function,
      default: () => console.log('hihi'),
    },
  },
  methods: {
    click() {
      this.$emit('accept')
    },
    cc() {
      this.$bus.$emit('toan', new Date())
    }
  },
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
.list-type {
  margin: 8px 0 16px;
  .item {
    padding: 4px 8px;
    background-color: #f1f1f1;
    border-radius: 2px;
    font-size: 14px;
    transition: all 0.1s ease-in-out;
    text-transform: capitalize;
    margin-right: 4px;
    a {
      color: grey;
      text-decoration: none;
    }
  }
}
</style>
