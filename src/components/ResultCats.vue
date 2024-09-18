<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                <p class="font-italic text-h4 text-center">Scores for Each Cat</p>
            </v-col>

            <!-- Display paginated cats -->
            <v-col cols="12" md="4" v-for="({ catUrl, score }, index) in paginatedCats" :key="index"
                class="d-flex align-center justify-center">
                <!-- Card for each cat with pink background -->
                <v-card elevation="5" class="cat-card" style="background-color: #FADADD;">
                    <v-avatar class="mx-auto mt-4" size="120">
                        <v-img :src="catUrl" />
                    </v-avatar>

                    <v-card-title class="justify-center">Cutest Cat</v-card-title>

                    <v-card-subtitle class="text-center">Score: {{ score }}</v-card-subtitle>

                    <!-- Rating component, use method to calculate rating -->
                    <v-rating :value="computedRating(score)" color="amber" background-color="amber" dense readonly
                        large>
                    </v-rating>

                    <v-card-actions class="justify-center">
                        <v-btn color="primary" icon>
                            <v-icon>mdi mdi-charity</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>

            <!-- Pagination Controls -->
            <v-col cols="12" class="text-center mt-5">
                <v-pagination v-model="currentPage" :length="totalPages" circle></v-pagination>
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
    data(): { currentPage: number; itemsPerPage: number } {
        return {
            currentPage: 1, // Track the current page
            itemsPerPage: 6, // Number of items per page
        };
    },
    computed: {
        // Method to get paginated and sorted cats
        paginatedCats(): { catUrl: string; score: number }[] {
            // First, convert the object into an array and sort by score in descending order
            const sortedCats = Object.entries(this.scores)
                .sort(([, scoreA], [, scoreB]) => scoreB - scoreA) // Sort by score, descending

            // Compute the start and end index for the current page
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;

            // Slice the sorted array to only return the cats for the current page
            return sortedCats.slice(start, end).map(([catUrl, score]) => ({
                catUrl,
                score,
            }));
        },
        totalPages(): number {
            // Calculate the total number of pages based on items per page
            return Math.ceil(Object.keys(this.scores).length / this.itemsPerPage);
        },
    },
    methods: {
        computedRating(score: number): number {
            const maxScore = 20; // Change le score maximum ici
            const rating = (score / maxScore) * 5;
            return Math.min(Math.max(rating, 0), 5); // Assure que la note est entre 0 et 5
        }
    },
});
</script>

<style scoped>
.cat-card {
    max-width: 300px;
    width: 100%;
    transition: transform 0.3s ease-in-out;
    background-color: #FADADD;
    /* Baby pink background */
}

.cat-card:hover {
    transform: translateY(-10px);
}
</style>
