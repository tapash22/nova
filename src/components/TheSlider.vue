<template>
<v-carousel hide-delimiters>
    <v-carousel-item v-for="(item,i) in sliders" :key="i"  >
        <img :src="'/sub/storage/app/'+item.simage"  style="width:100%;object-fit:cover;"/>
    </v-carousel-item>
</v-carousel>
</template>

<script>
export default {
    props:['sliders'],

}
</script>

<style scoped>
.v-carousel{
    width: 100% !important;
    height:400px !important;

}

@media only screen and (max-width: 600px) {
    .v-carousel{
    width: 100% !important;
    height:300px !important;

}
}

@media only screen and (max-width: 425px) {
    .v-carousel{
    width: 100% !important;
    height:200px !important;

}
}
</style>
