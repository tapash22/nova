<template>
<div class="gallery">
    <v-row class="d-flex justify-center my-5">

        <v-col cols="12" sm="12" md="3" lg="3" xl="3" v-for="product in products" :key="product.id" class="mx-2">

            <v-card elevation="3">
                <v-img :src="product.img" height="200" cover></v-img>
            </v-card>
        </v-col>

    </v-row>
</div>
</template>

<script>
export default {
    name: 'gallery',

    data() {
        return {
            products: [{
                    id: 1,
                    img: require('../../assets/chi.png'),
                },
                {
                    id: 2,
                    img: require('../../assets/co.png'),
                },
                {
                    id: 3,
                    img: require('../../assets/fi.png'),
                },
                
            ],
        }
    }

}
</script>
