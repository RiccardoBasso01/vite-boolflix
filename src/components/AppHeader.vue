<script>
import BaseSearchbar from './BaseSearchbar.vue';
export default {
    data() {
        return {

        }
    },
    components: { BaseSearchbar }
}
</script>

<template>
    <header>
        <div class="logo">
            <a href="#"><img src="https://fontmeme.com/permalink/230705/504e88f1a30f968e13f4cdd854aab685.png"
                    alt="font-netflix">
            </a>
        </div>

        <BaseSearchbar />
    </header>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;


header {
    background-color: $grey;
}
</style>