<template>
<div class="gallery">
    <v-row class="d-flex justify-center my-5">

        <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="gallery in gallerys" :key="gallery.id" class="mx-2">
            <Card :item="gallery" />
        </v-col>

    </v-row>
</div>
</template>

<script>
import Card from '@/components/Card.vue';
import Gallery from '@/api/Gallery';

export default {
    name: 'gallery',

    data() {
        return {
            gallerys: [],
        }
    },
    created(){
        this.getGallery();
    },

    mounted(){
        window.scrollTo(0,0)
    },

    components:{
        Card
    },

    methods: {
        getGallery() {
            Gallery.getGallery().then((response) => {
                this.gallerys = response.data;
                console.log(this.gallerys);
            });
        },
    },

}
</script>
