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
    <main>
        <div class="container-l">
            <!-- Lista dei film -->
            <h1>I film del momento</h1>
            <BaseContentList :sectionName="'trending-movies'" :container-list="store.trendingMovies" />

            <h1>Le serie TV del momento</h1>
            <BaseContentList :sectionName="'trending-series'" :container-list="store.trendingTV" />
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    overflow: scroll;
    height: calc(100vh - 90px);
}
</style>