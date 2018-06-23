<template>
  <div>
    <Header />
    <main>
      <!-- <Navigator :catTypes="catTypes" /> -->
      <div class="row">
        <div class="col-4" v-for="game in games" :key="game.id">
          <game-card :game="game" />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import GameCard from '@/pages/ListGame'
import Navigator from './Navigator'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HomePage',
  components: { Header, GameCard, Navigator },
  data() {
    return {
      test: [],
    }
  },
  computed: {
    ...mapState({ games: state => state.home.games }),
  },
  methods: {
    show() {
      console.log(this.games)
    },
    ...mapActions({ fetchListGames: 'home/fetchListGames' }),
  },
  watch: {
    $route(to, from) {
      // if (to.params.type !== from.params.type) this.getCats(to.params.type)
    },
  },
  created() {
    // const { params: { type } } = this.$route
    // this.getCats(type)
    this.fetchListGames()
  },
  updated() {},
  mounted() {},
}
</script>

<style lang="scss" scoped>
main {
  padding: 32px;
}
</style>
