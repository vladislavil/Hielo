<template lang="pug">
  .header-top(:class="{fixed: isHeader}")
    .header-top__content
      a.header-top__title(href="#")
        span.header-top__hielo
          | Hielo &nbsp;
        | by TEMPLATED
      .header-top__menu( @click="noscroll" v-show="isVisible === false")
        .header-top__strip
          span
        | menu
    transition(name="visible")
      nav.header-top__nav(v-show="isVisible")
        ul.header-top__list
          li.header-top__item(v-for="(item, index) of items")
             router-link( :to="item.href" @click="isVisible = !isVisible" replace) {{ item.text }}
        span.header-top__close(@click="noscroll") X

</template>

<script>

import './index.sass'

  export default {
      data () {
          return {
              isVisible: false,
              items: [
                  {text: "home", href: "/"},
                  {text: "gtntric", href: "/gtntric"},
                  {text: "elements", href: "/elements"}
              ]
          }
      },
      props: ['isHeader'],
      methods: {
          noscroll: function () {
              this.isVisible = !this.isVisible;
              if(this.isVisible === true) {
                  document.body.classList.add('noscroll');
              }
              else {
                  document.body.classList.remove('noscroll');
              }
          },
      },
  }

</script>

<style lang="sass">

    .visible-enter
        transform: translateX(280px)

        &.header-top__strip span
            display: none

        +max-w($mobile_sm)
            transform: translateX(100%)

    .visible-enter-active
        transition: transform 0.5s

    .visible-leave-to
        transform: translateX(280px)

        +max-w($mobile_sm)
            transform: translateX(100%)

    .visible-leave-active
        transition: transform 0.5s

</style>
