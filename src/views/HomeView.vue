<template>
  <v-parallax height="1000" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
    <div class="">
      <choose-cat @update-scores="updateScores" />
    </div>

    <div class="d-flex justify-center align-center">
      <v-btn @click="goToScores" color="success" fab x-large dark>
        <v-icon>mdi mdi-eye-arrow-right-outline</v-icon>
      </v-btn>
    </div>
  </v-parallax>
</template>



<script lang="ts">
import Vue from 'vue';
import ChooseCat from '@/components/ChooseCat.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    ChooseCat,
  },
  data: () => ({
    scores: {} as Record<string, number>, // Store Scores
  }),
  methods: {
    updateScores(newScores: Record<string, number>) {
      this.scores = newScores; // Update Scores
    },
    goToScores() {
      this.$router.push({ name: 'ViewScores', query: { scores: JSON.stringify(this.scores) } });
    },
  },
});
</script>
