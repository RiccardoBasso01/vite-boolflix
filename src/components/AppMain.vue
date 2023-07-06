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
    <!-- Lista dei film -->
    <h1>I film del momento</h1>
    <BaseContentList :container-list="store.trendingMovies" />
    <h1>serie tv</h1>
    <BaseContentList :container-list="store.trendingTV" />
</template>

<style lang="scss" scoped></style>