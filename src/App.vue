<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './data/store.js';

export default {
    data() {
        return {
        }
    },
    components: { AppHeader, AppMain }
}
</script>

<template>
    <!-- header -->
    <AppHeader />

    <!-- main -->
    <AppMain />
</template>

<style lang="scss">
@use 'assets/scss/style.scss';
@use 'assets/scss/_colors.scss' as *;


body {
    background-color: $dark-grey;
}
</style>