<template lang="pug">
  .elements
    header-top
    .elements__img
</template>

<script>
  import HeaderTop from 'components/Header/Header'

  export default {
    components: {
      HeaderTop
    }
  }

</script>

<style lang="sass" scoped>

  .header-top
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: black

  .elements__img
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background-image: url("bg.jpg")
    background-position: 50% 50%
    background-size: cover
    background-repeat: no-repeat

</style>
