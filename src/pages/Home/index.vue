<template>
  <div>
    <Header />
    <main>
      <Navigator :catTypes="catTypes" />
      <div class="row">
        <div class="col-4">
          <div v-for="(cat, index) in list1" :key="index">
            <CatCard :cat="cat" />
          </div>
        </div>
        <div class="col-4">
          <div v-for="(cat, index) in list2" :key="index">
            <CatCard :cat="cat" />
          </div>
        </div>
        <div class="col-4">
          <div v-for="(cat, index) in list3" :key="index">
            <CatCard :cat="cat" />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import CatCard from './CatCard'
import Navigator from './Navigator'
import { mapActions, mapState } from 'vuex'
import { capitalize, lowerCase } from 'lodash'

export default {
  name: 'HomePage',
  components: { Header, CatCard, Navigator },
  data() {
    return {
      cats: [],
    }
  },
  computed: {
    list1() {
      return this.list.filter((_, index) => index % 3 === 1)
    },
    list2() {
      return this.list.filter((_, index) => index % 3 === 2)
    },
    list3() {
      return this.list.filter((_, index) => index % 3 === 0)
    },
    ...mapState('cats', {
      list: 'list',
      catTypes: state => {
        return state.types.map(type => capitalize(type))
      },
    }),
  },
  methods: {
    ...mapActions('cats', {
      getCats(dispatch, type) {
        dispatch('getCats', lowerCase(type))
      },
    }),
  },
  watch: {
    $route(to, from) {
      if (to.params.type !== from.params.type) this.getCats(to.params.type)
    },
  },
  created() {
    const { params: { type } } = this.$route
    this.getCats(type)
  },
  mounted() {
    console.log(this)
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 32px;
}
</style>
