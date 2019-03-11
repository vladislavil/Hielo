<template lang="pug">
    .photo
        .photo__content
            a(:href="'#' + image" @click="changeIndex").photo__wrapper
                img(:src="image").photo__img
</template>


<script>
import './index.sass'
    export default {
        data() {
            return{

            }
        },
        props: ["image", "imageIndex", "index"],
        methods: {
            changeIndex: function () {
                this.index = this. imageIndex;
                this.$emit('indexChanged', this.index)
            }
        }
    }

</script>
