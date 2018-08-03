<template>
  <div>
    <Header />
    <main>
      <label>haha
      <input type="checkbox" v-model="check" @click="haah" />
      </label>
      <router-link to="/modal">
        <button>move</button>
      </router-link>
      <div>
        {{ test }}
      </div>
      <Navigator :name="'click know'" @accept="onAccept($emit)"> is this funny </Navigator>
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
      test: [],check: true,
    }
  },
  computed: {
    ...mapState({ games: state => state.home.games }),
  },
  methods: {
    onAccept(res) {
      console.log('ok', res)
    },
    haah(res) {
      console.log(this.check)
      res.preventDefault()
      // if (t) {
      //   this.check = !this.check
      //   console.log('ha', this.check)
      // }
    },
    newTest(e) {
       console.log({ e})
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
     
    this.$bus.$on('toan', this.newTest  )
    this.$bus.$on('toan', this.newTest  )
  },
  updated() {},
  mounted() {
    this.fetchListGames()
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 32px;
}
</style>
