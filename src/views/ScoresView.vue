<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <result-cats :scores="scores" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ResultCats from '@/components/ResultCats.vue';

export default Vue.extend({
  name: 'ScoresView',
  components: {
    ResultCats,
  },
  data: () => ({
    scores: {} as Record<string, number>,
  }),
  created() {
    const scores = this.$route.query.scores;
    if (scores) {
      this.scores = JSON.parse(scores as string);
    }
  },
});
</script>
