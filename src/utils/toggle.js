export default {
  data() {
    return {
      isShowing: false,
    }
  },
  methods: {
    toggle() {
      this.isShowing = !this.isShowing
    },
  },
}
