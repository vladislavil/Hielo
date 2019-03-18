<template lang="pug">
    .photo
        .photo__content
            div(@click="changeIndex").photo__wrapper
                img(:src="image").photo__img
</template>


<script>
import './index.sass'
    export default {
        data() {
            return{
                indexLocal: this.index
            }
        },
        props: ["image", "imageIndex", "index"],
        methods: {
            changeIndex: function () {
                this.indexLocal = this. imageIndex;
                this.$emit('indexChanged', this.indexLocal)
            }
        }
    }

</script>
