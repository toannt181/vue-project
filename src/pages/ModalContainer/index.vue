<template>
  <div class="container">
    <h1>Input</h1>
          <router-link to="/">
        <button>move</button>
      </router-link>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">{{ toan }}</span>
      </div>
      <input v-model="username" type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1">
    </div>

    <div class="input-group mb-3">
      <input v-model="email" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">@example.com</span>
      </div>
    </div>

    <label for="basic-url">Your vanity URL</label>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon3">https://example.com/users/</span>
      </div>
      <input v-model="web" type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">$</span>
      </div>
      <input v-model.number="money" type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
      <div class="input-group-append">
        <span class="input-group-text">.00</span>
      </div>
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <label class="input-group-text" for="inputGroupSelect01">Options</label>
      </div>
      <select class="custom-select" id="inputGroupSelect01" v-model="plan">
        <option selected disabled value="">Choose...</option>
        <option value="1">High Premiere</option>
        <option value="2">Middle Base</option>
        <option value="3">Business Class</option>
      </select>
    </div>

    <div class="input-group mb-3">
      <label>
        <p>Male</p>
        <input v-model="gender" type="radio" name="gender" value="male">
      </label>
      <label>
        <p>Female</p>
        <input v-model="gender" type="radio" name="gender" value="female">
      </label>
    </div>
    <warning-alert :valid="valid" />

    <transition name="fade">
      <modal-bootstrap :text="username" v-if="isShowing" :toggle="toggle" />
    </transition>

    <popup/>
    <input type="checkbox" :value="data.checkb" @change="changebx('checkb')"
      class="switch-image"
    />
    <input type="checkbox" :value="data.haha" @change="changebx('haha')"
      class="switch-image"
    />
    <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
      <button @click="submit" type="button" class="btn btn-primary">Submit</button>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>

  </div>
</template>

<script>
import WarningAlert from './WarningAlert'
import ModalBootstrap from './ModalBootstrap'
import Alert from './Popup'
import toggle from '@/utils/toggle'
import Vue from 'vue'

export default {
  name: 'ModalContainer',
  mixins: [toggle],
  components: { WarningAlert, ModalBootstrap, popup: Alert },
  data() {
    return {
      username: 'toan',
      email: 'v@gmail.com',
      web: 'money.org',
      money: 1112300,
      plan: '',
      gender: '1',
      valid: false,
      checkb: true,
      toan: 'haah',
      data: {
        checkb: false,
        haha: false,
      }
    }
  },
  computed: {},
  methods: {
    changebx(data) {
      console.log('change')
      this.data[data] = !this.data[data]
    },
    submit() {
      this.valid = this.validate()
      this.toggle()
    },
    hideModal() {
      this.showModal = false
    },
    validate() {
      if (!this.username) return 'USERNAME'
      if (!this.email || !/@/gi.test(this.email)) return 'EMAIl'
      if (!this.web) return 'WEB'
      if (!this.gender) return 'GENDER'
      if (!this.money) return 'MONEY'
      if (this.money < 10000) return 'MONEY_NOT_ENOUGH'
    },
  },
  created() {
    setTimeout(function() {
      console.log(this)
      Vue.set(this, 'toan', 'htttaha')
    }, 1000)
  },
}
</script>

<style lang="scss" scoped>

</style>
