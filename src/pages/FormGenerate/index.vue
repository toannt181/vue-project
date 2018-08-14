<template>
  <div class="container">
    <div>{{ formData }}</div> 
    <h1>Wellcome to formgenerate</h1>
    <FormGenerate :schema="schema" v-model="formData" />
  </div>
</template>

<script>
import FormGenerate from './FormGenerate'
export default {
  name: 'idnex',
  components: { FormGenerate },
  data() {
    return {
      schema: [
        {
          fieldType: 'SelectList',
          name: 'title',
          multi: false,
          label: 'Title',
          options: ['Ms', 'Mr', 'Mx', 'Dr', 'Madam', 'Lord'],
        },
        {
          fieldType: 'TextInput',
          placeholder: 'First Name',
          label: 'First Name',
          name: 'firstName',
        },
        {
          fieldType: 'Checkbox',
          name: 'agree',
          label: 'Agree',
        },
      ],
      formData: {
        title: 'Mr',
        firstName: 'toan even',
        agree: true,
        index: 0,
      },
    }
  },
  methods: {
   
  },
  updated() {
    console.log('be update')
  }
}
</script>

