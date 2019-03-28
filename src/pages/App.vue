<template lang="pug">
  .main#app(v-scroll="handleScroll")
    section.header
      header-top( :isHeader = "isHeader")
    router-view

</template>

<script>

import Banner from 'components/Banner/Banner'
import HeaderTop from 'components/Header/Header'

export default {
    data() {
      return {
          isHeader: false
      }
    },
    components: {
        Banner,
        HeaderTop
    },
    methods: {
        handleScroll: function(evt, el) {
            let banner = document.querySelector('.banner');
            let banner_height = banner.offsetHeight;
            let header = document.querySelector(".header-top");
            let header_height = header.offsetHeight;

            if(window.scrollY > (banner_height - header_height)) {
                this.isHeader = true;
            } else {
                this.isHeader = false;
            }
        },
    }
}
</script>

<style lang="sass">
.cards
    background-color: #f2f2f3

</style>

