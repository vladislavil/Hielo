<template lang="pug">

  .header-top(:class="{fixed: isHeader}")
    .header-top__content
      a.header-top__title(href="#")
        span.header-top__hielo
          | Hielo &nbsp;
        | by TEMPLATED
      .header-top__menu( @click="noscroll" :class="{close: isVisible}" v-show="isVisible === false")
        .header-top__strip
          span
        | menu
    nav.header-top__nav( :class="{visible: isVisible}" )
      ul.header-top__list
        li.header-top__item(v-for="item in items")
          router-link( :to="item.href") {{ item.text }}
      span.header-top__close(@click="noscroll") X

</template>

<script>

import './index.sass'

  export default {
      data () {
          return {
              isVisible: false,
              items: [
                  {text: "home", href: "/home"},
                  {text: "gtntric", href: "/gtntric"},
                  {text: "elements", href: "/elements"}
              ]
          }
      },
      props: ['isHeader'],
      methods: {
          noscroll: function () {
              this.isVisible = !this.isVisible;
              console.log(this.isVisible);
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
  li
    color: #ffffff !important
</style>
