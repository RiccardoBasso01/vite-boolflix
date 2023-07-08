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
    <div class="container-l">
        <h2 class="m-Y-2">Risultati ricerca</h2>
        <div>
            <h2 class="mb-1">Film </h2>
            <BaseContentList :container-list="store.searchMovie" />
            <h2 class="mb-1 mt-2">Serie TV </h2>
            <BaseContentList :container-list="store.searchTv" />
        </div>
    </div>
</template>

<style lang="scss"></style>