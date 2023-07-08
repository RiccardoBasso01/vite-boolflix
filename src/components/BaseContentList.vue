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
                    <a href="#" class="w-100">
                        <div class="img w-100">
                            <img v-if="content.poster_path" :src="`http://image.tmdb.org/t/p/w780${content.poster_path}`"
                                :alt="content.title" :title="content.title">
                            <div v-else class="image-not-found"></div>
                        </div>
                        <div class="secondary-img">
                            <img v-if="content.backdrop_path"
                                :src="`http://image.tmdb.org/t/p/w1280${content.backdrop_path}`" :alt="content.title">
                            <div v-else class="image-not-found"></div>

                            <!-- Descrizione -->
                            <div class="description">
                                <!-- Titolo e sottotitolo -->
                                {{ content.title || content.name }}
                                <div class="subtitle"> {{ subTitle(content) }} </div>

                                <!-- Lingua e voto -->
                                <div class="flex mt-2 gap-2">
                                    <span class="pills">
                                        <img v-if="hasFlag(content.original_language)"
                                            :src="flagSrc(content.original_language)" :alt="content.original_language">
                                        <span v-else>{{ content.original_language }}</span>
                                    </span>

                                    <span class="pills">
                                        <span v-for="n in 5" :key="n"><font-awesome-icon
                                                :icon="[vote(content.vote_average, n), 'star']" /></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="title">
                            {{ content.title || content.name }}
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

.image-not-found {
    background-image: url(https://www.themoviedb.org./assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg);
    width: 100%;
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


.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 5px;
    color: rgb(162, 162, 162);
}

$spacing: 10px;

li {
    padding: 0 $spacing;
    text-align: center;
}

// row
ul {
    width: 100%;
    display: flex;
    margin: 0, -$spacing;
}

//_______________________________________________________________________________________________________


.img,
.secondary-img {
    @include border;
    width: 100%;
    height: 297.6px;


}

a {
    position: relative;
}

.secondary-img {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    transition: opacity 0.3s;


    img {
        width: 100%;
        height: 297.6px;
        object-fit: cover;
        position: relative;
        filter: brightness(0.70);
    }
}

.content-card {
    width: 200px;
    overflow: hidden;
    transition: width 1s;
}

li:hover .content-card {
    width: 400px;

    .secondary-img {
        opacity: 1;
    }
}

.description {
    position: absolute;
    bottom: 10px;
    left: 10px;

    font-size: var(--font-size-m);
    text-align: start;
    text-shadow: 1px 1px 1px black;

    img {
        width: 20px;
        height: auto;
    }

}

.subtitle {
    font-size: var(--font-size-xs);

}

.pills {
    padding: 10px;
    @include border;
    background-color: $grey;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>