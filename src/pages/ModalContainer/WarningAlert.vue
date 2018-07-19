<template>
  <div v-if="valid" class="alert alert-danger" role="alert">
    <template v-if="valid === 'USERNAME'">
      You lost username
    </template>
    <template v-else-if="valid === 'MONEY'">
      Drop the money
    </template>
    <template v-else-if="valid === 'MONEY_NOT_ENOUGH'">
      POOR GUY!!!
    </template>
    <template v-else-if="valid === 'GENDER'">
      Watch the gender!!
    </template>
    <template v-else>
      I dont know you lost somethings
    </template>
  </div>
</template>

<script>
export default {
  name: 'WarningAlert',
  props: ['valid'],
}
</script>

<style lang="sass" scoped>

</style>
