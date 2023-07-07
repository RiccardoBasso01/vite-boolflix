<script>
// chiamata axios
import axios from 'axios';
// Import barra di ricerca
import BaseSearchbar from './BaseSearchbar.vue';
// Imoprt store.js
import { store, api } from '../data/store.js';

export default {
    components: { BaseSearchbar },
    methods: {
        // Funzione per filtrre i contenuti
        getFilterKey(formText) {
            const { baseUrl, api_key, language } = api;
            const axiosConfig = {
                params: { api_key, language, query: formText }
            };
            axios.get(`${baseUrl}/search/movie`, axiosConfig).then(res => {
                store.searchMovie = res.data.results
            });
            axios.get(`${baseUrl}/search/tv`, axiosConfig).then(res => {
                store.searchTv = res.data.results
            })
        }
    }
}
</script>

<template>
    <header>
        <div class="logo">
            <a href="#"><img src="https://fontmeme.com/permalink/230705/504e88f1a30f968e13f4cdd854aab685.png"
                    alt="logo Boolflix"></a>
        </div>

        <BaseSearchbar :placeholder="'Inserisci i film'" @form-submitted="getFilterKey" />
    </header>
</template>






<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;


header {
    background-color: $grey;
}
</style>