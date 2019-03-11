<template lang="pug">
  .header-top
    .header-top__content
      a.header-top__title(href="#")
        span.header-top__hielo
          | Hielo &nbsp;
        | by TEMPLATED
      .header-top__menu( @click="isVisible = !isVisible" :class="{close: isVisible}")
        .header-top__strip
          span
        | menu
    nav.header-top__nav( :class="{visible: isVisible}")
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
      // created() {
      //     document.addEventListener('click', (event) => {
      //         var el = document.querySelector('.header-top__nav');
      //         if(el.classList.contains('visible')) {
      //             console.log(event.target.className)
      //             this.isVisible = !this.isVisible;
      //         }
      //     });
      // }
  }

</script>
