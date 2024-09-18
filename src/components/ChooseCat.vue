<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Vote for the cutest cat</h2>
      </v-col>

      <v-col cols="6" class="text-center">
        <v-img :src="cat1.url" contain height="200" />
        <v-btn @click="voteForCat(cat1)">Vote for this cat</v-btn>
      </v-col>

      <v-col cols="6" class="text-center">
        <v-img :src="cat2.url" contain height="200" />
        <v-btn @click="voteForCat(cat2)">Vote for this cat</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { getCats } from '@/services/CatsData/api';
import { Cats } from '@/services/CatsData/type';



export default Vue.extend({
  name: 'ChooseCat',

  data: () => ({
    cats: [] as Cats[],
    cat1: {} as Cats,
    cat2: {} as Cats,
  }),


  methods: {
    async fetchCats(): Promise<void> {
      try {
        const response = await getCats();

        // Check if the response has the expected structure
        if (response.data && response.data.images) {
          this.cats = response.data.images;
          this.pickRandomCats();
        } else {
          this.cats = [];
        }
      } catch (error) {
        console.error('Error fetching cats:', error);
        this.cats = [];
      }
    },

    pickRandomCats() {
      const shuffledCats = [...this.cats].sort(() => 0.5 - Math.random());
      this.cat1 = shuffledCats[0];
      this.cat2 = shuffledCats[1];
    },

    voteForCat(cat: Cats) {
      cat.score++;
      this.pickRandomCats(); // Load two new cats for the next round
    },
  },

  mounted() {
    this.fetchCats(); // Fetch cats when the component is mounted
  }
})
</script>
