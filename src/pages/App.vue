<template lang="pug">

  .main__content
    transition(name="appear" mode="out-in")
      //keep-alive
      router-view

</template>

<style lang="sass" scoped>

  .appear-enter
    opacity: 0
    transform: translateX(-30%)

  .appear-enter-active
    transition: opacity 1s, transform 1s

  .appear-leave-to
    opacity: 0
    transform: translateX(-30%)

  .appear-leave-active
    transition: opacity 1s, transform 1s

</style>

