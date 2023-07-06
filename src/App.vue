<script>
// chiamata axios
import axios from 'axios';

// Import di tutti i components necessari
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import SearchResults from './components/SearchResults.vue';
// Imoprt store.js
import { store } from './data/store.js';

export default {
    data() {
        return { store }
    },
    components: { AppHeader, AppMain, SearchResults },
    created() {
        const { baseUrl, api_key, language } = store;
        const axiosConfig = {
            params: { api_key, language }
        };
        axios.get(`${baseUrl}/trending/movie/day`, axiosConfig).then(res => {
            store.trendingMovies = res.data.results
        });
        axios.get(`${baseUrl}/trending/tv/day`, axiosConfig).then(res => {
            store.trendingTV = res.data.results
        })
    }
}
</script>

<template>
    <!-- header -->
    <AppHeader />

    <!-- Sezione Home -->
    <section id="home-page">
        <AppMain />
    </section>

    <!-- Sezione con i risultati di ricerca -->
    <section id="search-section">
        <SearchResults />
    </section>
</template>




<style lang="scss">
@use 'assets/scss/style.scss';
@use 'assets/scss/_colors.scss' as *;


body {
    background-color: $dark-grey;
    color: white;
}
</style>