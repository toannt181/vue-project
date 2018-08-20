<template>
  <div>
    <Header />
    <main>
      <label>haha
      </label>
      <Navigator :name="'click know'" @accept="onAccept($emit)"> is this funny </Navigator>
    </main>
  </div>
</template>

<script>
import Header from '@/components/Header'
import GameCard from '@/pages/ListGame'
const Navigator = () => import ('./Navigator')
import { mapActions, mapState } from 'vuex'

export default {
  name: 'HomePage',
  components: { Header, GameCard, Navigator },
}
</script>

<style lang="scss" scoped>
main {
  padding: 32px;
}
</style>
