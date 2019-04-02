<template lang="pug">

  .main__content
    transition(name="appear" mode="out-in")
      //keep-alive
      router-view

</template>

<style lang="sass" scoped>

  .appear-enter
    opacity: 0

  .appear-enter-active
    transition: opacity 0.5s

  .appear-leave-to
    opacity: 0

  .appear-leave-active
    transition: opacity 0.3s

</style>

