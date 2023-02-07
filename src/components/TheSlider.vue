<template>
<v-carousel hide-delimiters>
    <v-carousel-item v-for="(item,i) in sliders" :key="i" :src="'/sub/storage/app/'+item.simage" class="image"></v-carousel-item>
</v-carousel>
</template>

  
<script>
export default {
    props:['sliders'],
    // data() {
    //     return {
    //         items: [{
    //                 src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
    //             },
    //             {
    //                 src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
    //             },
    //             {
    //                 src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
    //             },
    //             {
    //                 src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
    //             },
    //         ],
    //     }
    // },
}
</script>

<style scoped>
.image{
    height:200px !important;
}
.v-application--is-ltr .v-window__prev {
    z-index: 0 !important;
}
</style>
