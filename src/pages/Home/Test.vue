<template>
  <div>
    i am checking 
      <label>{{label}}</label>
      <input
        type="text"
        :name="name"
        placeholder="placeholder">
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Test',
  props: ['list'],
  data() {
    return { alist: this.list, tabId: 1 }
  },
  methods: {
  },
}
</script>
