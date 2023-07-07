<script>
export default {
    props: {
        containerList: Array,
        sectionName: String
    },
    methods: {
        hasFlag(flag) {
            const availableFlag = ['it', 'en']
            return availableFlag.includes(flag)
        },
        flagSrc(flag) {
            const url = new URL(`../assets/img/${flag}.png`, import.meta.url)
            return url.href
        },
        vote: (vote, n) => n <= Math.ceil(vote / 2) ? 'fas' : 'far',
        subTitle(content) {
            if (content.original_title) {
                return content.title === content.original_title ? '' : content.original_title
            } else {
                return content.name === content.original_name ? '' : content.original_name
            }
        }
    }
}
</script>

<template>
    <section :id="sectionName">
        <ul>
            <li v-for="content in containerList">
                <div class="content-card">
                    <a href="#">
                        <div class="img">
                            <img v-if="content.poster_path" :src="`http://image.tmdb.org/t/p/w780${content.poster_path}`"
                                :alt="content.title" :title="content.title">
                            <div v-else class="poster-not-found"></div>
                        </div>

                        <div class="description">
                            {{ content.title || content.name }}
                            {{ subTitle(content) }}
                            <img v-if="hasFlag(content.original_language)" :src="flagSrc(content.original_language)"
                                :alt="content.original_language">
                            <span v-else>{{ content.original_language }}</span>
                            <span v-for="n in 5" :key="n"><font-awesome-icon
                                    :icon="[vote(content.vote_average, n), 'star']" /></span>
                        </div>
                    </a>
                </div>
            </li>
        </ul>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;
@use '../assets/scss/style.scss' as *;

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


section {
    max-width: 100vw;
    overflow: scroll;
}

.img {
    @include border;
}



$numberOfCols: 6;
$spacing: 10px;



// cols

li {
    width: calc(100% / $numberOfCols);
    padding: 0 $spacing;
    text-align: center;
}

// row
ul {
    display: flex;
    margin: 0, -$spacing;
}


@media screen and (min-width: 576px) {
    $numberOfCols: 3;

    li {
        width: calc(100% / $numberOfCols);
    }
}

@media screen and (min-width: 768px) {
    $numberOfCols: 4;

    li {
        width: calc(100% / $numberOfCols);
    }
}

@media screen and (min-width: 992px) {
    $numberOfCols: 6;

    li {
        width: calc(100% / $numberOfCols);
    }
}
</style>