<script>
export default {
    data() {
        return {
            searchText: '',
            isVisible: false
        }
    },
    props: {
        placeholder: String
    },
    emits: ['form-submitted', 'text-change'],
    methods: {
        showSearchBar() {
            this.isVisible = !this.isVisible
        }
    }
}
</script>

<template>
    <div class="search">
        <form @submit.prevent="$emit('form-submitted')" :class="{ visible: isVisible }">
            <input @keyup="$emit('text-change', searchText)" v-model="this.searchText" type="text"
                :placeholder="placeholder || 'Cerca...'">
        </form>

        <button @click="showSearchBar" :class="{ alone: !isVisible }">
            <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
        </button>
    </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;

.search {
    display: flex;
    align-items: center;
}

form {
    width: 0;
    overflow: hidden;
    transition: width 0.5s linear;

    &.visible {
        width: 300px;
    }
}

input {
    width: 100%;
}

button {
    color: white;
    margin-right: 5px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
}
</style>