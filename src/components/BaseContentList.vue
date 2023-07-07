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
    <ul>
        <li v-for="content in containerList">
            <div class="card">
                <a href="#">
                    <img v-if="content.poster_path" :src="`http://image.tmdb.org/t/p/w780${content.poster_path}`"
                        :alt="content.title" :title="content.title">
                    <div v-else class="poster-not-found"></div>
                    {{ content.title || content.name }}
                    {{ content.original_title || content.original_name }}
                    <img v-if="hasFlag(content.original_language)" :src="flagSrc(content.original_language)"
                        :alt="content.original_language">
                    <span v-else>{{ content.original_language }}</span>
                    {{ content.vote_average }}
                </a>
            </div>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;

img {
    width: 200px;
}

.poster-not-found {
    background-image: url(https://www.themoviedb.org./assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg);
    width: 200px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: 100px;
    background-position: center;
    background-color: $light-grey;
}
</style>