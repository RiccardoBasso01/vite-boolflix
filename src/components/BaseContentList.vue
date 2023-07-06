<script>
export default {

    props: {
        containerList: Array
    },
    methods: {
        hasFlag(flag) {
            const availableFlag = ['it', 'en']
            return availableFlag.includes(flag)
        },
        flagSrc(flag) {
            const url = new URL(`../assets/img/${flag}.png`, import.meta.url)
            return url.href
        }
    }
}
</script>

<template>
    <section id="trending-movies">
        <ul>
            <li v-for="movie in containerList">
                <div class="card">
                    <a href="#">
                        {{ movie.title || movie.name }}
                        {{ movie.original_title || movie.original_name }}
                        <img v-if="hasFlag(movie.original_language)" :src="flagSrc(movie.original_language)"
                            :alt="movie.original_language">
                        <span v-else>{{ movie.original_language }}</span>
                        {{ movie.vote_average }}
                    </a>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped></style>