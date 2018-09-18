<template>
  <div>
    test div
  </div>
</template>
<script>
export default {
  props: {
    toan: String,
  },
  created() {
    console.log(this.toan)
  },
  watch: {
    toan(value) {
      console.log('log',this.toan, value)
    }
  }
}
</script>
