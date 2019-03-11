<template lang="pug">
  .main__content#app
    header
        header-top
    section.banner
        banner
    section.cards
        cards
    section.info
        info
    section.gellary
        images

</template>

<script>

import Banner from './components/Banner/Banner'
import HeaderTop from './components/Header/Header'
import Cards from './components/Cards/Cards'
import Info from './components/Info/Info'
import Images from './components/Images/Images'

export default {
    components: {
        Banner,
        HeaderTop,
        Cards,
        Info,
        Images
    }

}
</script>

<style lang="sass">
.cards
    background-color: #f2f2f2

</style>

