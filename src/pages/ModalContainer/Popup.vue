<script>
import toggle from '@/utils/toggle'
import Modal from './ModalBootstrap'

export default {
  mixins: [toggle],
  components: { Modal },
  props: {},
  created() {
    console.log(this.isShowing)
  },
  render(h) {
    return h('h2', {}, 'i am an hyperscript')
  },
}
</script>
