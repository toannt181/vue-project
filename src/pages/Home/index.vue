<template>
  <div>
    <Header />
    <main>
      <Navigator />
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

export default {
  name: 'HomePage',
  components: { Header, CatCard, Navigator },
  data() {
    return {
      cats: [
        'https://images.dog.ceo/breeds/dachshund/Dachshund_rabbit.jpg',
        'https://images.dog.ceo/breeds/dachshund/Daschund-2.jpg',
        'https://images.dog.ceo/breeds/dachshund/Daschund_Wirehair.jpg',
        'https://images.dog.ceo/breeds/dachshund/Miniature_Daschund.jpg',
        'https://images.dog.ceo/breeds/dachshund/Standard_Wire-hair_Dachshund.jpg',
        'https://images.dog.ceo/breeds/dachshund/Stretched_Dachshund.jpg',
        'https://images.dog.ceo/breeds/dachshund/dachshund-1018409_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/dachshund-123503_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/dachshund-1920_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/dachshund-2033796_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/dachshund-3.jpg',
        'https://images.dog.ceo/breeds/dachshund/dachshund-5.jpg',
        'https://images.dog.ceo/breeds/dachshund/dachshund-6.jpg',
        'https://images.dog.ceo/breeds/dachshund/dachshund-7.jpg',
        'https://images.dog.ceo/breeds/dachshund/dachshund_4.jpg',
        'https://images.dog.ceo/breeds/dachshund/daschund-1.jpg',
        'https://images.dog.ceo/breeds/dachshund/dog-1018408_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/dog-1083690_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/dog-2643027_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/dog-495122_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/dog-495133_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/dog-55140_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/foxhound-53951_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/harry-646905_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/kaninchen-dachshund-953699_640.jpg',
        'https://images.dog.ceo/breeds/dachshund/puppy-1006024_640.jpg',
      ],
    }
  },
  computed: {
    list1() {
      return this.cats.filter((_, index) => index % 3 === 1)
    },
    list2() {
      return this.cats.filter((_, index) => index % 3 === 2)
    },
    list3() {
      return this.cats.filter((_, index) => index % 3 === 0)
    },
  },
  mounted() {
    console.log('mounted')
  },
}
</script>

<style lang="scss" scoped>
main {
  padding: 32px;
}
</style>
