<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <form>
        <input type="text" placeholder="Cerca...">
        <button>Invia</button>
    </form>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;

button {
    background-color: $light-grey;
}
</style>