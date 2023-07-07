<script>
// chiamata axios
import axios from 'axios';
// Import barra di ricerca
import BaseSearchbar from './BaseSearchbar.vue';
// Imoprt store.js
import { store, api } from '../data/store.js';

export default {
    data() {
        return {
            api,
            contentFilter: ''
        }
    },
    components: { BaseSearchbar },
    computed: {
        axiosConfig(formText) {
            const { baseUrl, api_key, language } = api;
            return {
                params: {
                    api_key,
                    language,
                    query: this.contentFilter
                }
            };
        }
    },
    methods: {
        filterContent(formText) {
            this.contentFilter = formText;
            this.getApi('movie', 'searchMovie');
            this.getApi('tv', 'searchTv');
        },
        getApi(array, content) {
            axios.get(`${api.baseUrl}/search/${array}`, this.axiosConfig).then(res => {
                store[content] = res.data.results
            });
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

        <BaseSearchbar :placeholder="'Inserisci i film'" @form-submitted="filterContent" />
    </header>
</template>






<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;


header {
    background-color: $grey;
}
</style>