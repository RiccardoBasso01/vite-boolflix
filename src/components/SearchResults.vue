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
    <h2>Risultati ricerca</h2>
    <div>
        <h2>Film </h2>
        <BaseContentList :container-list="store.searchMovie" />
        <h2>Serie TV </h2>
        <BaseContentList :container-list="store.searchTv" />
    </div>
</template>

<style lang="scss"></style>