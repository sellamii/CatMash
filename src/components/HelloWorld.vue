<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(cat, index) in cats"
        :key="index"
        cols="12"
        md="4"
        lg="3"
      >
        <v-img
          :src="cat.url"
          contain
          height="200"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { getCats } from '@/services/CatsData/api';
  import { Cats } from '@/services/CatsData/type';



  export default Vue.extend({
    name: 'HelloWorld',

    data: () => ({
      cats: [] as Cats[]
    }),


    methods: {
      async fetchCats(): Promise<void> {
			try {
				const response = await getCats();

			// Check if the response has the expected structure
      if (response.data && response.data.images) {
          this.cats = response.data.images;
        } else {
          this.cats = [];
        }
      } catch (error) {
        console.error('Error fetching cats:', error);
        this.cats = [];
      }
		} 
  },

  mounted() {
      this.fetchCats(); // Fetch cats when the component is mounted
    }
  })
</script>
