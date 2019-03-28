<template lang="pug">
    .images
        .container
            .images__text
                .images__subtitle NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA
                .images__title Morbi maximus justo
            .images__content
                vue-gallery( :images="images" :index="index" @close="index = null"  @open = "index = 0")
                photo(v-for="(image, imageIndex) in images" :image="image" :imageIndex="imageIndex" :key="imageIndex" :index="index" @indexChanged = "index = $event")
</template>

<script>

import VueGallery from 'vue-gallery/src/component/gallery.vue'
import Photo from './Photo/Photo'
import './index.sass'

export default {
    data() {
        return {
            images: [
                "images/pic3.jpg", "images/pic1.jpg", "images/pic2.jpg", "images/pic4.jpg"
            ],
            index: null
        }
    },
    components: {
        Photo,
        VueGallery
    }
}

</script>
