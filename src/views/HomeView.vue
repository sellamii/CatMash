<template>
  <v-parallax height="1000" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">

    <!-- The ChooseCat component -->
    <div class="mt-10">
      <choose-cat @update-scores="updateScores" @user-voted="userHasVoted" />
    </div>

    <!-- "See Scores" Button -->
    <div class="d-flex justify-center align-center mt-10">
      <v-btn @click="checkVote" color="success" fab x-large dark>
        <v-icon>mdi mdi-eye-arrow-right-outline</v-icon>
      </v-btn>
    </div>

    <!-- Notification snackbar at the top of the page -->
    <v-snackbar v-model="showAlert" bottom color="warning" timeout="5000" elevation="2">
      <b>You need to vote for a cat before proceeding !</b>
      <v-btn color="white" text @click="showAlert = false">Close</v-btn>
    </v-snackbar>

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
    scores: {} as Record<string, number>, // Store scores
    hasVoted: false, // Indicates if the user has voted
    showAlert: false, // Controls the snackbar display
  }),
  methods: {
    updateScores(newScores: Record<string, number>) {
      this.scores = newScores; // Update scores
    },
    userHasVoted() {
      this.hasVoted = true; // Set flag to true when the user votes
      this.showAlert = false; // Hide the snackbar if it was displayed
    },
    checkVote() {
      if (!this.hasVoted) {
        this.showAlert = true; // Show the snackbar if the user hasn't voted
      } else {
        this.goToScores(); // Redirect if the user has voted
      }
    },
    goToScores() {
      this.$router.push({ name: 'ViewScores', query: { scores: JSON.stringify(this.scores) } });
    },
  },
});
</script>
