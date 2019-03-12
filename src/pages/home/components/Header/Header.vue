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
      created() {

          window.onload = function () {
              var aaaa = document.querySelector('.header-top__menu');

              aaaa.onclick = function () {
                  var header = document.querySelector('.header-top__nav');
                  var body = document.body;
                  if (!header.classList.contains('visible')) {
                      console.log(11111);
                      console.log(body);
                      body.classList.add('no--scroll')
                  } else {
                      if (body.classList.contains('no--scroll')) {
                          body.classList.remove('no--scroll');
                      }
                  }
              }
          }
      }
  }

</script>
