<script>
// Imoprt store.js
import { store } from '../data/store.js';

import BaseContentList from './BaseContentList.vue'

export default {
    data() {
        return { store }
    },
    components: { BaseContentList }
}
</script>

<template>
    <h1>RISULTATI RICERCA</h1>
    <div>
        <h2>Film </h2>
        <BaseContentList :container-list="store.searchMovie" />
        <h2>Tv </h2>
        <BaseContentList :container-list="store.searchTv" />
    </div>
</template>

<style lang="scss"></style>