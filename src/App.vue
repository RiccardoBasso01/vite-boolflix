<script>
// chiamata axios
import axios from 'axios';
const link = 'https://api.themoviedb.org/3/trending/movie/day?api_key=c9010d9998307ed28e3fd7d0c8d75997';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './data/store.js';

export default {
    data() {
        return {
        }
    },
    components: { AppHeader, AppMain },
    created() {
        axios.get(link).then(res => {
            console.log(res.data.results)
            store.trendingMovies = res.data.results
        })
    }
}
</script>

<template>
    <!-- header -->
    <AppHeader />

    <!-- main -->
    <AppMain />
</template>

<style lang="scss">
@use 'assets/scss/style.scss';
@use 'assets/scss/_colors.scss' as *;


body {
    background-color: $dark-grey;
}
</style>