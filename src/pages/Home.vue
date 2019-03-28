<template lang="pug">
  .main__content(v-scroll="handleScroll")
    section.header
      header-top( :isHeader = "isHeader")
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

  import Banner from 'components/Banner/Banner'
  import Cards from 'components/Cards/Cards'
  import Info from 'components/Info/Info'
  import Images from 'components/Images/Images'
  import HeaderTop from 'components/Header/Header'

  export default {
    data() {
      return {
        isHeader: false
      }
    },
    components: {
      HeaderTop,
      Banner,
      Cards,
      Info,
      Images
    },
    methods: {
      handleScroll: function(evt, el) {
        console.log("evt", evt);
        console.log("el", el);
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

