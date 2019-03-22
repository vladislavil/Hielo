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
              li.header-top__item(v-for="item of items")
                  a.header__link(:href="item.href" @click="isVisible = false") {{ item.text }}
          span.header-top__close(@click="noscroll") X

</template>

<script>

import './index.sass'

  export default {
      data () {
          return {
              isVisible: false,
              items: [
                  {text: "home", href: "#"},
                  {text: "gtntric", href: "#"},
                  {text: "elements", href: "#"}
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


</style>
