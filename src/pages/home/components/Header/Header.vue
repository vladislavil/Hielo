<template lang="pug">
  .header-top
    .header-top__content
      a.header-top__title(href="#")
        span.header-top__hielo
          | Hielo &nbsp;
        | by TEMPLATED
      .header-top__menu( @click="hide" :class="{close: isVisible}")
        .header-top__strip
          span
        | menu
    nav.header-top__nav( :class="{visible: isVisible}" )
      ul.header-top__list
          li.header-top__item(v-for="item of items")
              a.header__link(:href="item.href" @click="isVisible = false") {{ item.text }}
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
      methods: {
          hide: function () {
              this.isVisible = !this.isVisible;
              console.log(this.isVisible);
              if(this.isVisible === true) {
                  document.body.classList.add('noscroll');
              }
              else {
                  document.body.classList.remove('noscroll');
              }
          }
      }
  }

</script>
