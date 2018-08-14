<template>
  <div>
    hello you {{ name }}
  </div>
</template>

<script>
export default {
  name: 'tabone',
  data() {
    return { name: 110 }
  },
  created() {
    console.log('one created')
    this.$bus.$on('hi', this.updateNumber)
  },
  destroyed() {
    console.log('nav destroyed')
  },
  methods: {
    updateNumber(e) {
      this.name = e
    },
  },
}
</script>
