<script>
import TheMovieList from './TheMovieList.vue'
export default {
    data() {
        return {

        }
    },
    components: { TheMovieList }
}
</script>

<template>
    <!-- Lista dei film -->
    <h1>I film del momento</h1>
    <TheMovieList />
</template>

<style lang="scss" scoped></style>