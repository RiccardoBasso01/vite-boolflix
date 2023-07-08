<script>
// chiamata axios
import axios from 'axios';

// Import di tutti i components necessari
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import SearchResults from './components/SearchResults.vue';
import SearchLoader from './components/SearchLoader.vue';
import TheIntro from './components/TheIntro.vue';
// Imoprt store.js
import { store, api } from './data/store.js';

export default {
    data() {
        return {
            store,
            showIntro: true
        }
    },
    components: { AppHeader, AppMain, SearchResults, SearchLoader, TheIntro },
    created() {
        const { baseUrl, api_key, language } = api;
        const axiosConfig = {
            params: { api_key, language }
        };
        axios.get(`${baseUrl}/trending/movie/day`, axiosConfig).then(res => {
            store.trendingMovies = res.data.results
        });
        axios.get(`${baseUrl}/trending/tv/day`, axiosConfig).then(res => {
            store.trendingTV = res.data.results
        });
    },
    mounted() {
        this.showIntro = true
    },
    methods: {
        goToSite() {
            this.showIntro = false
        }
    }
}
</script>

<template>
    <!-- Intro -->
    <TheIntro v-if="showIntro" @sign-in="goToSite" />

    <!-- header -->
    <AppHeader />

    <!-- Sezione Home -->
    <section v-if="!store.inputText" id="home-page">
        <AppMain />
    </section>

    <!-- Sezione con i risultati di ricerca -->
    <section v-else id="search-section">
        <SearchLoader v-if="store.showLoader" />
        <SearchResults v-else />
    </section>
</template>




<style lang="scss">
@use 'assets/scss/style.scss';
@use 'assets/scss/_colors.scss' as *;


body {
    background-color: $dark-grey;
    color: white;
    height: 100vh;
}
</style>