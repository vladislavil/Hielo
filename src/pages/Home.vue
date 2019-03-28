<template lang="pug">
  .main__content
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

  export default {
    data() {
      return {
        isHeader: false
      }
    },
    components: {
      Banner,
      Cards,
      Info,
      Images
    },
  }
</script>

<style lang="sass">
  .cards
    background-color: #f2f2f3

</style>

