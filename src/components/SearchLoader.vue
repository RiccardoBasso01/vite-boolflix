<script>
</script>

<template>
    <section class="mt-4">
        <div class="container-l">
            <ul>
                <li v-for="n in 6">
                    <div class="content-card">

                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>




<style lang="scss" scoped>
@use '../assets/scss/_colors.scss' as *;
@use '../assets/scss/style.scss' as *;


$spacing: 10px;

li {
    padding: 0 $spacing;
    text-align: center;
}

ul {
    width: 100%;
    display: flex;
    margin: 0, -$spacing;
}

.content-card {
    @include border;
    height: 300px;
    width: 200px;
    background-color: transparent;

}

@for $i from 1 through 6 {
    li:nth-child(#{$i}) .content-card {
        animation: pulse 2s infinite alternate cubic-bezier(1, -0.01, 0.82, 0.9);
        animation-delay: ($i) * 0.5s;
    }

}


@keyframes pulse {
    from {
        background-color: transparent;

    }

    to {
        background-color: $light-grey;
    }
}
</style>