<script>
import { store } from '../data/store.js'
export default {
    data() {
        return { store }
    }
}
</script>

<template>
    <section id="trending-movies">
        <ul>
            <li v-for="movie in store.trendingMovies">
                <a href="#">{{ movie.title }}</a>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped></style>