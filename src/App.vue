<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img alt="L'atelier Logo" class="shrink mr-2" contain src="@/assets/img/latelier.jpeg"
          transition="scale-transition" width="50" />

        <span class="mr-2">L 'Atelier</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/sellamii/CatMash" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  data: () => ({
    //
  }),
});
</script>
