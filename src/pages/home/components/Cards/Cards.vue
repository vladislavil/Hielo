<template lang="pug">
    .container
        .cards__content
            card( v-for="(item, index) of items" :item="item" :index="index" :key="index" )
</template>

<script>

import Card from './Card/Card'
import './index.sass'

export default {
    data() {
        return {
            items: [
                {image: "images/pic1.jpg", subtitle: "MAECENAS SAPIEN FEUGIAT EX PURUS", title: "Lorem ipsum dolor", text: "Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada."},
                {image: "images/pic2.jpg", subtitle: "MATTIS ELEMENTUM SAPIEN PRETIUM TELLUS", title: "Vestibulum sit amet", text: "Cras aliquet urna ut sapien tincidunt, quis malesuada elit facilisis. Vestibulum sit amet tortor velit. Nam elementum nibh a libero pharetra elementum. Maecenas feugiat ex purus, quis volutpat lacus placerat malesuada."}
            ],
        }
    },
    components: {
        Card
    }
}

</script>
