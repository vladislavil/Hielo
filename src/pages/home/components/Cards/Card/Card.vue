<template lang="pug">
    .card
        .card__content
            .card__img-wrapper
                img.card__img(:src="item.image")
            .card__text-wrapper
                .card__subtitle {{ item.subtitle }}
                .card__title {{ item.title }}
                .card__text {{ item.text }}
                a(href="#").card__button learn more
</template>


<script>

import './index.sass'

export default {
    data() {
        return {
        }
    },
    props: ["item","index"]
}

</script>
