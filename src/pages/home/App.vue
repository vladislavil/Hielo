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
    },
    created() {
        var banner_height;
        var banner;
        var toppanel;
        var header_height;

        window.onload = function () {
            toppanel = document.querySelector(".header-top");
            header_height = toppanel.offsetHeight;
            banner = document.querySelector('.banner');
            banner_height = banner.offsetHeight;

            if(!toppanel.length) return;

        };

        window.onscroll = function () {
            var position = window.pageYOffset || document.documentElement.scrollTop;

            if(banner_height > 0 && header_height > 0) {

                if (position > (banner_height - header_height)) {
                    toppanel.classList.add('top-panel__fixed');

                } else {
                    toppanel.classList.remove('top-panel__fixed');
                }
            }
        };

    }

}
</script>

<style lang="sass">
.cards
    background-color: #f2f2f3

.top-panel__fixed
    position: fixed
    left: 0
    top: 0
    background-color: #000000
    transition: background-color 0.9s

</style>

