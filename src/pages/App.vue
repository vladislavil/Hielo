<template lang="pug">
  .main#app
    section.main__header
      header-top
    router-view
</template>

<script>

  import HeaderTop from 'components/Header/Header'

export default {
    components: {
      HeaderTop,
    }
}
</script>

<style lang="sass">

.header-top
  background-color: #000

</style>
