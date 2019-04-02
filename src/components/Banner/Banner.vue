<template lang="pug">
  .banner__content
    agile.banner__carousel(:autoplay="true" :dots="true" :arrows="false" :pauseOnHover="false" :fade="true" :speed="700" :adjustableHeight="true")
      .slide(v-for="(image, key) in images")
        parallax(:speed-factor="0.4")
          img.banner__img(:src="image.image" :alt="image.image")
        .banner__data
          h1.banner__title {{image.title}}
          h5.banner__subtitle {{image.subtitle}}
</template>

<script>

import Agile  from 'vue-agile/dist/Agile.vue'
import Parallax from 'vue-parallaxy/dist/vue-parallaxy.min.js'
import './index.sass'

  export default {
    components: {
      Parallax,
      Agile
    },
    props: [
      "images"
    ],
    data () {
      return {

      }
    }
  }

</script>
