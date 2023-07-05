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
                <div class="card">
                    <a href="#">
                        {{ movie.title }}
                        {{ movie.original_title }}
                        {{ movie.original_language }}
                        {{ movie.vote_average }}
                    </a>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped></style>