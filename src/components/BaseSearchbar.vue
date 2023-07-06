<script>
export default {
    data() {
        return {
            searchText: '',
        }
    },
    props: {
        placeholder: String
    },
    emits: ['form-submitted']
}
</script>

<template>
    <form @submit.prevent="$emit('form-submitted', searchText)">
        <input v-model="this.searchText" type="text" :placeholder="placeholder || 'Cerca...'">
        <button>Invia</button>
    </form>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;

button {
    background-color: $light-grey;
}
</style>