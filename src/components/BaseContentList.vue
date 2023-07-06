<script>
export default {

    props: {
        containerList: Array
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
                        {{ movie.original_language }}
                        {{ movie.vote_average }}
                    </a>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped></style>