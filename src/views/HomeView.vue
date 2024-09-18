<template>
  <choose-cat />
</template>

<script lang="ts">
  import Vue from 'vue'
  import ChooseCat from '../components/ChooseCat.vue'

  export default Vue.extend({
    name: 'Home',

    components: {
      ChooseCat,
    },
  })
</script>
