<template>
  <div class="container">
    <h1>Input</h1>
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">@</span>
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
      <label>
        <p>Gay</p>
        <input v-model="gender" type="radio" name="gender" value="gay">
      </label>
    </div>

    <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
      <button @click="submit" type="button" class="btn btn-primary">Submit</button>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ModalContainer',
  components: {},
  data() {
    return {
      username: 'toan',
      email: 'v@gmail.com',
      web: 'money.org',
      money: 100,
      plan: '',
      gender: '',
    }
  },
  computed: {},
  methods: {
    submit() {
      this.validate()
    },
    validate() {
      if (!this.username) return false
      if (!this.email || !/@/gi.test(this.email)) return false
      if (!this.web) return false
      if (!this.gender) return false
      if (!this.money) return false
      if (this.money < 10000) return false
    },
  },
  created() {},
}
</script>

<style lang="scss" scoped>
</style>
