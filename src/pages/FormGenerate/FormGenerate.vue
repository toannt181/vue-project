<template>
  <div>
    <component 
      v-for="(field, index) in schema"
      :key="index"
      :is="field.fieldType"
      v-bind="field"
      :value="formData[field.name]"
      @input="change(field.name, $event)"
    />
    <div>{{ formData }}</div> <button @click="reset">Reset</button>
  </div>
</template>

<script>
import Checkbox from './Checkbox'
import SelectList from './SelectList'
import TextInput from './TextInput'
export default {
  name: 'FormGenerate',
  components: { Checkbox, SelectList, TextInput },
  props: ['schema', 'value'],
  data() {
    return {
      formData: this.value || {},
    }
  },
  methods: {
    reset() {
      const index = ++this.value.index
      this.$set(this.value, 'index', index)
    },
    change(name, val) {
      this.$set(this.formData, name, val)
      // this.$emit('input', this.formData)
    },
  },
}
</script>

