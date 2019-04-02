<template lang="pug">
  .main__wrapper(v-scroll="handleScroll")
    section.header
      header-top( :isHeader = "isHeader")
    section.banner
      banner( :images="images")
    section.cards
      .container
        .cards__card
          cards( v-for="(dt, index) of data" :item="dt" :index="index" :key="index" )
    section.info
      info( :items = "items")
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
        items: [
          {title: "Morbi maximus justo", subtitle: "NAM VEL ANTE SIT AMET LIBERO SCELERISQUE FACILISIS ELEIFEND VITAE URNA"}
        ],
        data: [
          {image: "images/pic1.jpg", subtitle: "MAECENAS SAPIEN FEUGIAT EX PURUS", title: "Lorem ipsum dolor", text: "Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada."},
          {image: "images/pic2.jpg", subtitle: "MATTIS ELEMENTUM SAPIEN PRETIUM TELLUS", title: "Vestibulum sit amet", text: "Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada."}
        ],
        images: [
          {title: "Hielo", subtitle:'A FREE RESPONSIVE WEB SITE TEMPLATE BY TEMPLATED', image: "images/carousel/slide01.jpg"},
          {title: 'Magna etiam', subtitle: 'LOREM IPSUM DOLOR SIT AMET NULLAM FEUGIAT', image: "images/carousel/slide02.jpg"},
          {title: 'Tempus dolor', subtitle: 'SED CURSUS ALIUAM VEROEROS LOREM IPSUM NULLAM', image: "images/carousel/slide03.jpg"},
          {title: 'Etiam feugiat', subtitle: 'LOREM IPSUM DOLOR SIT AMET NULLAM FEUGIAT', image: "images/carousel/slide04.jpg"},
          {title: 'Lorem adipiscing', subtitle: 'IPSUM DOLOR SED MAGNA VEROEROS LOREM IPSUM', image: "images/carousel/slide05.jpg"},
        ],
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
    },
    directives: {
      scroll: {
        inserted: function (el, binding) {
          let f = function (evt) {
            if (binding.value(evt, el)) {
              window.removeEventListener('scroll', f);
            }
          };
          window.addEventListener('scroll', f);
        }
      }
    }
  }
</script>

<style lang="sass">
  .cards
    background-color: #f2f2f3

  .cards__card
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    padding: px-to-vw(90, $desktop_md) 0 px-to-vw(95, $desktop_md)

    +max-w(1175)
      padding-left: 15px
      padding-right: 15px

    +max-w($laptop_lg)
      justify-content: space-around
      padding: px-to-vw(65, $laptop_sm) 15px px-to-vw(60, $laptop_sm)

    +max-w($tablet)
      flex-direction: column
      align-items: center
      padding: px-to-vw(60, $mobile_sm) 15px px-to-vw(40, $mobile_sm)

</style>

