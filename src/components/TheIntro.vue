<script>
export default {
    data() {
        return {
        }
    },

    emits: ['sign-in'],

}
</script>

<template>
    <section id="intro">
        <div class="title-pop-up">BOOLLFLIX</div>
        <button @click="$emit('sign-in')">Accedi</button>
    </section>
</template>




<style lang="scss" scoped>
@use '../assets/scss/style.scss' as *;
@use '../assets/scss/_colors.scss' as *;


#intro {
    width: 100%;
    height: 100vh;

    background-color: $grey;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
}

img {
    width: 300px;
}

button {
    @include border;
    padding: 10px 20px;
    border-radius: 20px;
    background-color: $dark-grey;
    color: white;
    transition: background-color 0.5s;
}

button:hover {
    background-color: #dc1a28;
}

.title-pop-up {
    color: #dc1a28;
    font-size: 6rem;
    font-weight: 700;
    animation: pop-up 0.5s 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes pop-up {
    from {
        transform: translateY(0);
        transform-origin: 50% 50%;
        text-shadow: none;
    }

    to {
        transform: translateY(-50px);
        transform-origin: 50% 50%;
        text-shadow: 0 1px 0 #510000, 0 2px 0 #510000, 0 3px 0 #510000, 0 4px 0 #510000, 0 5px 0 #510000, 0 6px 0 #510000, 0 7px 0 #510000, 0 8px 0 #510000, 0 9px 0 #510000, 0 50px 30px rgba(0, 0, 0, 0.4);
    }
}
</style>