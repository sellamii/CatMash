<template>
  <v-parallax height="1000" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"><choose-cat /></v-parallax>
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
