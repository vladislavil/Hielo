<template lang="pug">
    .info__content
        parallax
          img(src="images/bg.jpg")
        .info__text(v-for="item in items")
            h1.info__title {{ item.title }}
            h5.info__subtitle {{ item.subtitle }}
</template>

<script>

import './index.sass'
import Parallax from 'vue-parallaxy/dist/vue-parallaxy.min.js'

  export default {
    props: [
      "items"
    ],
    components: {
        Parallax
    }
  }

</script>
