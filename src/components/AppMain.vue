<script>
import { store } from '../data/store.js'

import BaseContentList from './BaseContentList.vue'
export default {
    data() {
        return { store }
    },
    components: { BaseContentList }
}
</script>

<template>
    <div class="container-l">

        <!-- Lista dei film -->
        <h1>I film del momento</h1>
        <BaseContentList :sectionName="'trending-movies'" :container-list="store.trendingMovies" />

        <h1>serie tv</h1>
        <BaseContentList :sectionName="'trending-series'" :container-list="store.trendingTV" />
    </div>
</template>

<style lang="scss" scoped></style>