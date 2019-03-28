<template lang="pug">
    .info__content
        parallax
          img(src="images/bg.jpg")
        .info__text
            h1.info__title Morbi maximus justo
            h5.info__subtitle NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA
</template>

<script>

import './index.sass'
import Parallax from 'vue-parallaxy/dist/vue-parallaxy.min.js'

    export default {
        components: {
            Parallax
        }
    }

</script>
