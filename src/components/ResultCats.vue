<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <p class="font-italic text-h4 text-center">Scores for each cat</p>
            </v-col>

            <v-col cols="4" v-for="(score, catUrl) in scores" :key="catUrl">
                <v-img :src="catUrl" contain height="200" />
                <p class="text-center">Score: {{ score }}</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'ResultCats',
    props: {
        scores: {
            type: Object as () => Record<string, number>,
            required: true,
        },
    },
});
</script>