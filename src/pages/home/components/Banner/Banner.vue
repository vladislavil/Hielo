<template lang="pug">
  .banner
    agile.banner__carousel(:autoplay="true" :dots="true" :arrows="false" :pauseOnHover="false" :fade="true" :speed="700")
      .slide(v-for="(item, key) in items")
        parallax(:speed-factor="0.4")
          img.banner__img(:src="item.image" :alt="item.image")
        .banner__data
          h1.banner__title {{item.title}}
          h5.banner__subtitle {{item.subtitle}}
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
    data () {
      return {
        items: [
          {title: "Hielo", subtitle:'A FREE RESPONSIVE WEB SITE TEMPLATE BY TEMPLATED', image: "images/carousel/slide01.jpg"},
          {title: 'Magna etiam', subtitle: 'LOREM IPSUM DOLOR SIT AMET NULLAM FEUGIAT', image: "images/carousel/slide02.jpg"},
          {title: 'Tempus dolor', subtitle: 'SED CURSUS ALIUAM VEROEROS LOREM IPSUM NULLAM', image: "images/carousel/slide03.jpg"},
          {title: 'Etiam feugiat', subtitle: 'LOREM IPSUM DOLOR SIT AMET NULLAM FEUGIAT', image: "images/carousel/slide04.jpg"},
          {title: 'Lorem adipiscing', subtitle: 'IPSUM DOLOR SED MAGNA VEROEROS LOREM IPSUM', image: "images/carousel/slide05.jpg"},
        ]
      }
    }
  }

</script>
