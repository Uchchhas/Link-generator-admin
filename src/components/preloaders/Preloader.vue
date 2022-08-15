<template>
    <div class="overlay">
        <div class="spinner">
            <div class="spinner-blade" v-for="(spinner, index) in 12"
                 :key="`spinner-${index}`"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Preloader'
    }
</script>

<style scoped lang="scss">
    $spinner-size: 48px;
    $spinner-color: var(--color-primary);

    .overlay {
        width: 100%;
        min-height: 200px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        .spinner {
            width: 1rem;
            height: 1rem;
            position: relative;
            font-size: $spinner-size;

            .spinner-blade {
                width: .074em;
                height: .2777em;
                position: absolute;
                left: .4629em;
                bottom: 0;
                border-radius: .0555em;
                background-color: transparent;
                transform-origin: center -.2222em;
                animation: spinner-fade 1s infinite linear;

                $animation-delay: 0s;
                $blade-rotation: 0deg;

                @for $i from 1 through 12 {
                    &:nth-child(#{$i}) {
                        animation-delay: $animation-delay;
                        transform: rotate($blade-rotation);
                        $blade-rotation: $blade-rotation + 30;
                        $animation-delay: $animation-delay + .083;
                    }
                }

            }
        }
    }

    @keyframes spinner-fade {
        0% {
            background-color: $spinner-color;
        }
        100% {
            background-color: transparent;
        }
    }

</style>